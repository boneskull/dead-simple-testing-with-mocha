# Dead Simple Testing with Mocha

> A workshop for OpenJS World 2020, by Christopher Hiller

The stuff in this repo contains materials for my workshop, **Dead Simple Testing with Mocha**.

**[Slides](https://speakerdeck.com/boneskull/dead-simple-testing-with-mocha)** / **[Recording](https://youtu.be/JhQ-PuwoWAE)**

## Motivation

**The intent of this workshop is to illustrate fundamental testing principles using [Mocha](https://mochajs.org), a JavaScript testing framework.**

This workshop **does not** prescribe "best practices", nor does it claim other approaches are invalid. With experience, you'll understand what works best for you, your team, and your project.

In other words:

**This workshop presents _a_ way to work, not _the_ way to work.**

## Is This Workshop for Me?

If you're reading this, then very likely so.

### Stuff You Don't Need to Know

First, let's be clear on what **is not** prerequisite knowledge for this workshop.

- You **do not** need to have used Mocha before
- You **do not** need experience with writing tests in JavaScript

### Stuff You Need to Know

The following **is** prerequisite knowledge. In other words, I'll _assume_ you understand the following, because I will not be taking any significant time to explain it:

- You **must** know how to checkout code with `git` or other client
- You **should** be familiar with a command shell (Bash, PowerShell, cmd, zsh, etc.)
- You **should** be comfortable with using Node.js on the command-line
- You **should** be comfortable installing packages with `npm`
- You **should** have an basic understanding of the following JavaScript concepts:
  - [Closures and scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
  - [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
  - [`Promises`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
  - Globals (`window` in a browser or `global` in Node.js)
  - Node.js' module system (`module.exports`, `require()`, etc.)

## Workshop Structure & Organization

Topics covered:

1. Getting situated
   1. Installing first example project
   1. Installing Mocha
   1. Introducing Mocha
1. Your first test
   1. Why do we test? What do we test?
   1. Testing terminology
   1. "BDD"-style tests vs. others

Each top-level item above has a corresponding directory in the `topics/` directory.

## Prerequisite Software

Install the following:

1. Node.js v12 ([download](https://nodejs.org/download))
1. `git` 2.x ([download](https://git-scm.com/download))
1. A graphical web browser newer than IE11
