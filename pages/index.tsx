import type { NextPage } from "next";
import { Button, Heading } from "@polyrepo-fam/libby-ui";

const Home: NextPage = () => (
  <div>
    <a href="https://github.com/polyrepo-fam">polyrepo-fam</a>
    <h1>appy</h1>
    <div>
      <h2>@polyrepo-fam/libby-ui</h2>
      <Button>Hello, Button!</Button>
      <Heading level={3}>Hello, Heading</Heading>
    </div>
  </div>
);

export default Home;
