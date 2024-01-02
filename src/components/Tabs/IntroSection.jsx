import React from "react"

const e = React.createElement;

export default function IntroSection() {
    return e('section',
    {className: 'intro-section'},
        [
            e('h1', {className:'beautiful-font', key: Math.random().toString()}, 'React vs Angular'),
            e('h1', {className:'beautiful-font-italic', key: Math.random().toString()}, '(a comparison of two popular front-end frameworks).'),
        ],
    )
}