import React from "react";
import Header from "./../../components/header";
import Helmet from "react-helmet";
import ReactMarkdown from "react-markdown";
import styles from "./work.module.css";

const work = [
  {
    title: "What the fuck should I do in?",
    url: "https://www.whatthefuckshouldido.in",
    style: styles.wtf,
    content: `I'd played with [Elixir](https://elixir-lang.org) a little bit, but decided during an on-call
    shift to build something over the week with it. Being inspired by
    [another site](https://whatthefuckshouldimakefordinner.com/)
    I wanted to build a sweary travel guide.


I like building projects that mash APIs together in fun ways and I also like eating and drinking my way through cities, so it was a really fun side project.
    `,
    img: "/images/work/wtf.png"
  },
  {
    title: "Deliveroo",
    url: "https://www.deliveroo.co.uk",
    style: styles.deliveroo,
    content: `When I started at Deliveroo, Engineering was 40 people and the whole codebase was in one Application. Now we're in 13 different markets and Engineering is nearly 10 times as big.

I've worked on a lot of different projects there like porting the Menu page from Angular to React, allowing Restaurants to deliver food themselves and decomping the listing page to a new Go Application. I even worked on a change that the Mayor of London, Sadiq Khan, [commented on](https://twitter.com/sadiqkhan/status/969239476760383488?lang=en).
    `,
    img: "/images/work/deliveroo.png"
  }
];

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#eee";
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Tommy Palmer | Work</title>
        </Helmet>
        <Header />

        <section className={styles.work}>

          <article>
            <p>
              I work with Ruby, Go, Elixir and JavaScript. I enjoy working on
              user facing features by collaborating with designers, user
              researchers and product managers.
            </p>
            <p>
              I'm currently a Senior Software Engineer at Deliveroo working on
              the consumer ordering flow. I previously worked at GOV.UK.
            </p>
            <p>
              Here is my <a href="/cv.pdf">CV</a>.
            </p>
            <p>Below is some of the work I've done.</p>
          </article>

        </section>
        <section className={styles.projects}>
          {work.map((project, i) => (
            <section key={i} className={project.style}>
              <div>
                <article>
                  <h2><a href={project.url}>{project.title}</a></h2>
                  <ReactMarkdown source={project.content} />
                  <a href={project.url}>{project.url.replace("https://www.", "")}</a>
                </article>
                <a href={project.url}>
                  <img src={project.img} alt={project.title} />
                </a>
              </div>
            </section>
          ))}
        </section>
      </React.Fragment>
    );
  }
}
