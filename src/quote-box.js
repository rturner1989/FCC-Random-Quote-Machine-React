import React, { useState, useEffect, useRef } from "react";
import data from "./data";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import { FaTwitter, FaFacebook } from "react-icons/fa";

// const url = "https://api.quotable.io/random";

const QuoteBox = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [color, setColor] = useState("#198754");

    const refQuote = useRef(null);
    const refAuthor = useRef(null);

    const getNum = (length) => {
        return Math.floor(Math.random() * length);
    };

    const randomQuote = () => {
        const { quote, author } = data[getNum(data.length - 1)];
        setQuote(quote);
        setAuthor(author);
        setColor("#198754");
        animate(refAuthor);
        animate(refQuote);
    };

    const shortQuote = () => {
        const filter = data.filter(
            (item) => item.quote.split(" ").length <= 10
        );
        const { quote, author } = filter[getNum(filter.length - 1)];

        setQuote(quote);
        setAuthor(author);
        setColor("#0d6efd");
        animate(refAuthor);
        animate(refQuote);
    };

    const longQuote = () => {
        const filter = data.filter((item) => item.quote.split(" ").length > 20);
        const { quote, author } = filter[getNum(filter.length - 1)];

        setQuote(quote);
        setAuthor(author);
        setColor("#DC3545");
        animate(refAuthor);
        animate(refQuote);
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

    useEffect(() => {
        randomQuote();
    }, []);

    return (
        <Container id="quote-box" style={{ borderColor: color }}>
            <Container id="quote-container">
                <div id="quote-text">
                    <p id="text" ref={refQuote}>
                        "{quote}"
                    </p>
                </div>
                <div id="auth-text">
                    <p id="author" ref={refAuthor}>
                        -{author}
                    </p>
                </div>
            </Container>

            <Container id="btn-container">
                <ButtonGroup id="link-group">
                    <Button
                        id="tweet-quote"
                        href="twitter.com/intent/tweet"
                        style={{ borderColor: color, color: color }}
                    >
                        <FaTwitter />
                    </Button>
                    <Button
                        id="facebook-quote"
                        href="www.facebook.com"
                        style={{ borderColor: color, color: color }}
                    >
                        <FaFacebook />
                    </Button>
                </ButtonGroup>

                <ButtonGroup className="btn-group">
                    <Button
                        variant="outline-success"
                        id="new-quote"
                        onClick={randomQuote}
                    >
                        New Quote
                    </Button>
                    <Button
                        variant="outline-primary"
                        id="short-quote"
                        onClick={shortQuote}
                    >
                        Short Quote
                    </Button>
                    <Button
                        variant="outline-danger"
                        id="long-quote"
                        onClick={longQuote}
                    >
                        Long Quote
                    </Button>
                </ButtonGroup>
            </Container>
        </Container>
    );
};

export default QuoteBox;
