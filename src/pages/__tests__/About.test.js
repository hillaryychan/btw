import About from "../About";
import React from "react";
import renderer from "react-test-renderer";

it("About page rendering", () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="mt-2 container"
>
  <h1>
    About
  </h1>
  <p>
    Hello there, I'm Hillary.
  </p>
  <p>
    I made 
    <span
      style={
        Object {
          "fontStyle": "italic",
          "fontWeight": "bold",
        }
      }
    >
      btw
    </span>
     to be a cross between a note taking app and a to-do list.
  </p>
  <p>
    Why? Because I didn't like how something worked and decided to do something about it.
  </p>
  <p>
    To explain, I have a few friends that I catch up with sporadically and I tend to write down a list of things that I want to talk/mention/discuss with them the next time I see them. Normally, I'd have a checklist per person detailing what I'd like to talk about with them, but
     
    <ul>
      <li>
        When I've talked about something (i.e. checked/crossed/completed it), it still exists on the checklist with a 
        <strike>
          strikethrough
        </strike>
         and makes the list cluttered over time. I don't really need to see crossed out items 
        <i>
          on
        </i>
         
        the list itself; I may want to view it at a later point but that has hardly ever been the case
      </li>
      <li>
        There have been times where I want to talk about the same thing with multiple people and I have to copy the same idea over multiple checklists
      </li>
      <li>
        Sometimes I have a lot to say about an idea and need more than one line to express it. Sure we can have sub-items, but that doesn't work for rambling thoughts and musings that are meant to supplement my idea instead of being an extra sub-idea I want to point out
      </li>
    </ul>
    <p>
      Basically, I wanted a glorified checklist that
    </p>
    <ul>
      <li>
        Handled completed items in manner that suits my needs
      </li>
      <li>
        Could have points shared across multiple people
      </li>
      <li>
        Had better handling of complicated thoughts or ideas
      </li>
    </ul>
  </p>
  <p>
    I don't expect anyone else but myself to use this, but if you have any problems, suggestions or features you can raise an issue on the
     
    <a
      href="https://github.com/hillaryychan/btw"
    >
      site's GitHub repository
    </a>
    . Maybe I'll add an email point of contact later...
  </p>
</div>
`);
});
