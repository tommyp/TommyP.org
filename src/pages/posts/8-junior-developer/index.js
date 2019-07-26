import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "./../../../components/header";
import styles from "./junior-developer.module.css";

const post = `
3rd February 2014 was my first day at the [Government Digital Service](https://gds.blog.gov.uk) as a Junior Developer. I’d done my research, attended the interview and read all I could about it and it was still one of the scariest days of my entire life. I’ve been a Junior Developer at GDS working on [GOV.UK](https://www.gov.uk) since then and although I’ve been working in the industry since I finished Uni just over three years ago, it was an incredibly different experience and environment compared to anywhere that I’ve worked before.

My first week there was very daunting and overwhelming. Monday started with not knowing who to meet at reception. Frantic emailing got me an answer and [Brad](https://twitter.com/bradwright) showed up to welcome me. I was given my laptop and a phone and joined my team in the middle of a meeting. A meeting which would not only last all of that day, it also lasted for the next 4. It was about something called [Transition](https://transition.blog.gov.uk). At the time I had no idea what transition was or what my part in it would be.

Eventually it became clear that our team was helping to move certain Government agencies to GOV.UK. Mostly those who deal with users that work in a certain industry, such as tax lawyers, aircraft engineers or medical professionals. These are users with specialist needs, and thus our team was called Specialist. Team Specialist was then divided into Team A (later renamed Search & Browse) and Team B (later Product Gaps). I started in Search & Browse but moved to Product Gaps after a few weeks.

The first month or two was scary and hectic, but after a while I really began to love it, and still do. Being a Junior Developer and working on something so incredibly huge and different to what I was used to was a welcome change. It turns out that very few people in our industry know what being a Junior entails and what makes it different from being a ‘regular’ developer. The boundaries between I and the other, more experienced developers on my team aren’t as clear cut as you might think.

Here’s what I’ve learnt about being a Junior so far:

### You aren’t an imposter

If you’re anything like me, your first few weeks will be fraught with a deep-seated fear that you aren’t supposed to be there. Either you aren’t experienced enough, they hired the wrong person or there’s been a mix up at some point and the moment they figure this all out you’ll be marched out the door.

[Imposter syndrome](http://en.wikipedia.org/wiki/Impostor_syndrome) is a horrible thing that we all get, especially in jobs that require any level of experience. You have to remember though that you were hired for a reason and so was everyone else there. If you, at some point, feel daunted that everyone else seems so much more knowledgeable than you, you have to remember that they also have knowledge gaps. The people you’re working with didn’t just wake up one day incredibly smart. They worked hard whilst learning from others more experienced than them, just like you’re doing.

### No stupid questions

That brings me onto my next point. No matter how stupid you think a question might be, ask it. This was especially true for me in GDS as there’re so many acronyms and internal idioms that people may as well be speaking another language. I’ve been there for 8 months and I still regularly have to stop a conversation to find out which government body or part of the website we’re talking about.

For a large site like GOV.UK, the team has many internal words to describe different parts of it. The terms Browse Pages, Publications, Panopticon, Whitehall (referring to an App in the stack, not the place) and many others were all unfamiliar to me. I’m sure it wound my team up to no end, but stopping the conversation to ask for a quick explanation of these things helped to bring me up to speed. This not only applies to Juniors but to anyone joining a team that works on a large and complicated existing product. The quicker you get up to speed, the quicker you’ll be able to contribute to the team. No one is going to judge you for this.

As a Developer more specifically (and even more so as a Junior), you have to understand that it’s fine to ask for help with something technical. Here’s a quick run down of things I’ve asked for help with since I started:

- how to set up key forwarding to my VM
- what the hell’s a VM?
- advanced git
- the difference between an OpenStruct and a Struct
- enumerables in Ruby
- [writing good Javascript](https://github.com/alphagov/styleguides/blob/master/js.md)
- properly using RSpec, Cucumber and Jasmine
- how to use VIM to write my commit messages
- how to use VIM 99% of the rest of the time I accidentally end up opening it

There’s probably hundreds of things in the list, but those are some of the most notable. What became apparent to me is that it’s fine to ask for help with these things the first time round, and even the second for something to jog your memory. If you’re lucky like I was and you’re surrounded by incredibly smart and nice people then you’ll have no trouble remembering their answers. Having understanding colleagues who take the time to explain things to you in a way you understand is probably the most important factor in how quickly you learn.

### Everyone makes mistakes

In one of my first weeks here, I fucked up by accidentally force pushing to master. Luckily it would've never gone un-noticed and it was fixed within minutes, because I literally went “Uh oh” and the person who had been helping me was sitting beside me, so I could point the issue out to him. It turns out I wasn’t the first to do it and I certainly won’t be the last. If you realise you’ve fucked something up, tell someone and don’t wait until it causes an issue later down the line.

### Pairing

Pairing was something I’d never did before I started at GDS. We don’t practise it all the time, but frequently two developers will sit at the same machine, with two keyboards and work together. It's very useful for a number of reasons. Personally, I found that I became more familiar with an unfamiliar part of the stack in a shorter space of time. But when I paired with someone more experienced, I was also able to learn a huge amount, especially if they’re driving and I ask them questions. Being able to query what someone is doing as they’re doing it not only lets you understand the conceptual changes that they’re making, but also forces them vocalise it which, in many cases, can help with their own train of thought.

It’s actually a really great way to work, but it doesn’t even need to be be as strict as two people typing together. A few weeks ago I was working on refactoring how a description of a user’s search is generated [(try a search here and look at the sentence after the result count, that’s it)](http://gov.uk/cma-cases). I called over our Front End Developer, [Alice](https://twitter.com/alicebartlett), who sat at my desk with me and we talked about what exactly the code needed to do and how it would do it. We had a chat for about 15 minutes which included minimal coding and the problem was solved.

Although it's useful (and honestly not as scary as you think) there are times when it isn’t the best way to get work done. As a Junior Developer, you can often feel inadequate when pairing with those who are more experienced than you. Especially if you seem to be contributing nothing. Some people aren’t as good with externalising their thought process and involving you, which can lead you to feel that you are more of a hindrance than a help.

Being the most inexperienced in the team can lead you to a lot of these moments. You might feel inadequate and fairly useless compared to your colleagues, but you’ve got to remember that they understand and it’s OK to say that you don’t know how to do something and want to pair with someone else leading.

An approach that I’ve been taking has been to pick up the next item in our backlog and if I have a slight idea of how it’ll work, instead of pairing with someone right from the start, I’ll have a chat with our Tech Lead, [Dom](http://twitter.com/evilstreak). He’ll explain the approach I should take and what the end result should be and let me work, coming back an hour or two later to see how I’m getting on.

For example, recently, Dom had shown me what he thought the solution to a problem would be. I worked on it until I hit a stumbling block. After a quick chat, we decided that the end result should be slightly different and I needed to do some refactoring of the code I’d written so far. Asking someone to look at your code while you work on it is perfectly acceptable, especially if you think there’s a better way to do it. Everyone in our team works this way, not just me.

I’ve found that asking for a push in the direction of the end goal is not only a great way to get work done and learn, but also it helps to feel more confident in the code you’re contributing to the team. It may take you longer to do it, but that comes with being a Junior Developer. Those people you work with who are able to come up with a solution faster than you, at one point in their careers also needed to ask for help. Don’t forget that.

### No bad ideas

As a new cog in a big machine you might be afraid to say what you’re thinking in case it’s something so catastrophically wrong that you’re marched out the door with your P45. That won’t happen. No one is going to shout at you for sharing a bad idea.

In my first few weeks at GDS, I paired with Dom on adding something called Specialist Sectors. A way to tag content to specialist industries, such as the Oil and Gas industry. The approach I suggested was the one we ended up taking, though Dom wrote the code. The important thing is it’s actually [still there](https://github.com/alphagov/whitehall/blob/master/app/models/specialist_sector.rb) and that I, a Junior Developer, was able to suggest a good enough approach for something that has stayed in the codebase.

### Code Reviews

Something that it took me a while to get used to, was using Pull Requests properly. The way most people work at GDS, is to branch off of master for a feature and open a Pull Request when they think the feature is ready, ideally having the PR contain [atomic commits](http://programmers.stackexchange.com/questions/163593/what-does-it-mean-by-atomic-commit-for-a-versioning-system). Others in their team (or even those in other teams) will comment on the commits, then the author will edit the commits and force push the branch to keep the commit history clean. Our apps in some cases might need to stick around for at least a few years, so having a clean commit history is important.

When people comment on your code at the review stage, it’s not about saying that your work is wrong. If the feature works, then technically your work isn’t wrong. It can be for a number of different reasons. Most of the feedback you’ll commonly get are architecture changes. For example you may have written an unnecessarily complicated method or class, used part of an API incorrectly or the person reviewing it may have a different idea about how you should’ve completed the piece of work.

We recently added a [section to our style guide](https://github.com/alphagov/styleguides) about how to critique Pull Requests, but as someone who gets more feedback than I give, I think this guide is great at explaining the viewpoint of your reviewer.

### Take initiative

One Friday afternoon in the office [Mark](http://twitter.com/markhurrell) was looking at someone else’s screen as they showed him something and he realised there was a bug on the front page of GOV.UK. The user was able to apply focus to the whole page and get the blue User Agent outline round a section of the DOM. I commented on how I’d also noticed that and Mark replied facetiously, “Well sort it out then Tommy!”

So I did. I, a Junior Developer, put in a [pull request](https://github.com/alphagov/frontend/pull/580) to fix a bug on the front page of the UK’s website. Most people probably wouldn’t notice the change, but it was something worth fixing.

If you think something is worth doing, don’t wait to be told to do it, just go ahead and do it. You may be a Junior Developer, but you should be able to think for yourself and maybe work on things aren’t simply picked from a backlog in Trello or Pivotal Tracker.

## Being Junior

I didn’t really know what I was doing when I applied for GDS. It grabbed me for a number of reasons, but mostly because of what they’re doing and what it represents. I wanted to work on something that actually had meaning. An opportunity few people in our industry ever get to have.

When I moved to London I hoped that I would find an amazing job straight away and it would be the start of a new chapter in my career. The reality was that I left one job after a month and then worked in a job that didn’t challenge me enough (though they were a really nice bunch of people).

I saw the ad on Twitter for a Junior Developer and thought that I had enough experience to have a good chance at it. More so than if I’d have applied for a mid-level Developer role. I didn’t know what the distinction was other than I get paid less because I’m less experienced. But it’s about much more than that.

Being a Junior Developer is a great opportunity, not only to learn, but to work with people who are crazy smart and want to show you how to be crazy smart. The end goal being that a few years down the line you’ll be able to do the same for someone else. Even if they think they’re out of their depth and don’t know what they’re doing.

Someone said the quote below to me outside a pub after a meetup one night and it's always stuck with me. I don't remember who said it, but it seems appropriate to share it.

> _“It’s not that I’m better at what we do than you or that I’m more experienced. It’s just that I’ve been doing this for longer.”_

#### Footnotes

1. We’ve just closed our latest round of hiring, but if working at GDS sounds like something you’re interested in future jobs will be advertised [here](https://gds.blog.gov.uk/jobs/).

2. I’m not sure I’ve ever heard of other, large organisations taking on Junior Developers. This is what I have experienced since I started but it’s probably good information if you want to hire Junior Devs.

3. I wouldn’t have considered myself a Junior Developer anywhere else. GOV.UK is easily the most complicated thing I’ve ever worked on. I’d already spent practically 3 years in the industry but still got a huge amount out of applying as a Junior. Previously I’d worked on mostly single purpose Rails and Sinatra Apps but hadn’t worked on what amounts to a stack in the same way as GOV.UK, which is lots of different Applications working together. What I’ve said here might not 100% be relevant or useful to you, but to someone entering a new and daunting work environment or working on a huge project, they might get something out of this.
`;

export default class extends React.Component {
  componentWillMount() {
    document.body.style.backgroundColor = "#fff";
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          styles={styles.header}
          previous="/moving-on"
          next="/firebreak"
        />

        <article className={styles.content}>
          <header className={styles.title}>
            <h1>Junior Developer</h1>
          </header>
          <section className={styles.main}>
            <ReactMarkdown source={post} />
          </section>
        </article>
      </div>
    );
  }
}
