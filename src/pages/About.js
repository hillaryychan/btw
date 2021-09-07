import "../styles.css";
import Container from "react-bootstrap/Container";
import React from "react";

function About() {
  return (
    <Container className="mt-2">
      <h1>About</h1>
      <p>Hello there, I&apos;m Hillary.</p>
      <p>
        I made <span className="Brand">btw</span> to be a cross between a note
        taking app and a to-do list.
      </p>
      <p>
        Why? Because I didn&apos;t like how something worked and decided to do
        something about it.
      </p>
      <p>
        To explain, I have a few friends that I catch up with sporadically and I
        tend to write down a list of things that I want to talk/mention/discuss
        with them the next time I see them. Normally, I&apos;d have a checklist
        per person detailing what I&apos;d like to talk about with them, but
      </p>
      <ul>
        <li>
          When I&apos;ve talked about something (i.e. checked/crossed/completed
          it), it still exists on the checklist with a{" "}
          <strike>strikethrough</strike> and makes the list cluttered over time.
          I don&apos;t really need to see crossed out items <i>on</i> the list
          itself; I may want to view it at a later point but that has hardly
          ever been the case
        </li>
        <li>
          There have been times where I want to talk about the same thing with
          multiple people and I have to copy the same idea over multiple
          checklists
        </li>
        <li>
          Sometimes I have a lot to say about an idea and need more than one
          line to express it. Sure we can have sub-items, but that doesn&apos;t
          work for rambling thoughts and musings that are meant to supplement my
          idea instead of being an extra sub-idea I want to point out
        </li>
      </ul>
      <p>Basically, I wanted a glorified checklist that</p>
      <ul>
        <li>Handled completed items in manner that suits my needs</li>
        <li>Could have points shared across multiple people</li>
        <li>Had better handling of complicated thoughts or ideas</li>
      </ul>
      <p>
        I don&apos;t expect anyone else but myself to use this, but if you have
        any problems, suggestions or features you can raise an issue on the{" "}
        <a href="https://github.com/hillaryychan/btw">
          site&apos;s GitHub repository
        </a>
        . Maybe I&apos;ll add an email point of contact later...
      </p>
    </Container>
  );
}

export default About;
