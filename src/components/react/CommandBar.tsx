import type { MDXInstance } from "astro";
import { Command } from "cmdk";
import React from "react";

interface CommandMenuProps {
  posts: MDXInstance<Record<string, any>>[];
}

const CommandMenu = ({ posts }: CommandMenuProps) => {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
    
    const titles = posts.map((post) => post.frontmatter.title);

  console.log(">", posts.map(post=>post.frontmatter.title));

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        {/* <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group> */}
          <Command.Item>a</Command.Item>
        <Command.Group heading="Posts">
            <Command.Item>{titles[0]}</Command.Item>;
            <Command.Item>{titles[1]}</Command.Item>;
            <Command.Item>{titles[2]}</Command.Item>;
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
};

export default CommandMenu;
