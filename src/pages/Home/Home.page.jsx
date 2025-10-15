import Card from "@/components/atoms/Card/Card.atom";
import Heading from "@/components/atoms/Heading/Heading.atom";
import Paragraph from "@/components/atoms/Paragraph/Paragraph.atom";
import React from "react";

const Home = () => {
  return (
    <>
      <Heading type="h1" text="Välkommen till Webshoppen" />
      <Card>
        <Paragraph text="Här kommer det inom kort komma upp massa häftiga varor att köpa." />
        <Paragraph text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti, illo eum debitis quo sunt mollitia exercitationem fugiat eligendi veritatis animi, rem rerum ad dolores, accusantium temporibus illum labore dolore minus nemo quasi ut? Deleniti totam nihil pariatur! Et maxime, neque atque veniam vero odit mollitia sequi dicta natus necessitatibus!" />
      </Card>
    </>
  );
};

export default Home;
