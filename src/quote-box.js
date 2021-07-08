import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { ProgressBar } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";

const url = "https://goquotes-api.herokuapp.com/api/v1/all/quotes";

const QuoteBox = () => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [timerProgress, setTimerProgress] = useState(100);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [color, setColor] = useState("#198754");
    const [click, setClick] = useState(false);
    const [carousel, setCarousel] = useState(null);

    const refQuote = useRef(null);
    const refAuthor = useRef(null);

    const getNum = (length) => {
        return Math.floor(Math.random() * length);
    };

    const urlFetch = async () => {
        setloading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data.quotes);
        } catch (error) {}
        setloading(false);
    };

    const randomQuote = () => {
        const { text, author } = data[getNum(data.length - 1)];
        setQuote(text);
        setAuthor(author);
        setColor("#198754");
        animate(refAuthor);
        animate(refQuote);
        setTimerProgress(0);
        setCarousel("random");
    };

    const shortQuote = () => {
        const filter = data.filter((item) => item.text.split(" ").length <= 10);
        const { text, author } = filter[getNum(filter.length - 1)];
        setQuote(text);
        setAuthor(author);
        setColor("#0d6efd");
        animate(refAuthor);
        animate(refQuote);
        setTimerProgress(0);
        setCarousel("short");
    };

    const longQuote = () => {
        const filter = data.filter((item) => item.text.split(" ").length > 20);
        const { text, author } = filter[getNum(filter.length - 1)];
        setQuote(text);
        setAuthor(author);
        setColor("#DC3545");
        animate(refAuthor);
        animate(refQuote);
        setTimerProgress(0);
        setCarousel("long");
    };

    const animate = (element) => {
        element.current.animate(
            [
                { opacity: 0, color: "#fff" },
                { opacity: 1, color: "#000" },
            ],
            300
        );
    };

    const handleClick = () => {
        navigator.clipboard.writeText(quote);
        setClick(true);
        setTimeout(() => {
            setClick(false);
        }, 2000);
    };

    useEffect(() => {
        urlFetch();
    }, []);

    useEffect(() => {
        if (data[0] !== undefined) {
            randomQuote();
        }
    }, [data]);

    useEffect(() => {
        const timer = setInterval(() => {
            switch (carousel) {
                case "random":
                    randomQuote();
                    break;
                case "short":
                    shortQuote();
                    break;
                case "long":
                    longQuote();
                    break;
                default:
                    randomQuote();
            }
        }, 10000);
        return () => {
            clearInterval(timer);
        };
    }, [quote]);

    useEffect(() => {
        const barTimer = setInterval(() => {
            setTimerProgress((state) => {
                return state + 1;
            });
        }, 100);
        return () => {
            clearInterval(barTimer);
        };
    }, [timerProgress, quote]);

    return (
        <Container id="quote-box" style={{ borderColor: color }}>
            <Container id="quote-container">
                <div
                    id="quote-text"
                    className="d-flex justify-content-center align-items-end"
                >
                    <p id="text" ref={refQuote}>
                        {loading ? (
                            <VscLoading
                                className="loading-icon"
                                style={{ color: color }}
                            />
                        ) : (
                            `"${quote}"`
                        )}
                    </p>
                </div>
                <div id="auth-text">
                    <p id="author" ref={refAuthor}>
                        {loading ? "" : `-${author}`}
                    </p>
                </div>
            </Container>

            <Container id="btn-container">
                <ButtonGroup id="link-group">
                    <Button
                        id="tweet-quote"
                        href="twitter.com/intent/tweet"
                        target="_blank"
                        style={{ borderColor: color, color: color }}
                    >
                        <FaTwitter />
                    </Button>
                    <Button
                        id="copy-quote"
                        onClick={handleClick}
                        style={{ borderColor: color, color: color }}
                    >
                        {click ? <AiOutlineCheckCircle /> : <FiCopy />}
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="btn-group">
                    <Button
                        variant="outline-success"
                        id="new-quote"
                        onClick={randomQuote}
                        disabled={loading}
                    >
                        New Quote
                    </Button>
                    <Button
                        variant="outline-primary"
                        id="short-quote"
                        onClick={shortQuote}
                        disabled={loading}
                    >
                        Short Quote
                    </Button>
                    <Button
                        variant="outline-danger"
                        id="long-quote"
                        onClick={longQuote}
                        disabled={loading}
                    >
                        Long Quote
                    </Button>
                </ButtonGroup>
            </Container>
            <div>
                <ProgressBar
                    id="progress-bar"
                    animated
                    now={timerProgress}
                    min={0}
                    max={88}
                />
            </div>
            {click ? <Alert className="alert">Copied!</Alert> : ""}
        </Container>
    );
};

export default QuoteBox;
