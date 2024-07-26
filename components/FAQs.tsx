import React, { useState } from 'react';
import Accordion from './Accordian';

const FAQs = () => {
    const [expanded, setExpanded] = useState<number | false>(false);
  const accordionIds = [
    {
      title: "What is Cairo DAO?",
      description: [
        "CairoDAO is a community dedicated to supporting the Cairo and StarkNet ecosystems.We focus on providing grants, bounties, hackathons, workstations, incubation programs, and mentorship from the StarkWare team to developers and founders."
        
      ]
    },
    {
      title: "What are the benefits of joining Cairo DAO?",
      description:  [
        "As a member of CairoDAO, you will have access to exclusive opportunities such as:",
        { text: "Participation in grant programs and bounties", bullet: true },
        { text: "Access to hackathons and workstations", bullet: true },
        { text: "Incubation programs for promising projects", bullet: true },
        { text: "Mentorship from the StarkWare team", bullet: true },
        { text: "Networking with developers and founders in the StarkNet ecosystem", bullet: true }
      ]
    },
    
    {
      title: "What types of projects does Cairo DAO support?",
      description: [
        "CairoDAO supports a wide range of projects within the Cairo and StarkNet ecosystems, including but not limited to:",
        { text: "Wallet", bullet: true },
        { text: "DeFi applications", bullet: true },
        { text: "Infrastructure tools", bullet: true },
        { text: "ZKML tools", bullet: true },
        { text: "Developer tooling", bullet: true },
        { text: "Appchain", bullet: true },
        { text: "Payments", bullet: true },
        { text: "DAO", bullet: true },
        { text: "StarkEx", bullet: true },
        { text: "Governance", bullet: true }
      ]
    },
    {
      title: "Who is eligible to join Cairo DAO?",
      description: [
        "CairoDAO is open to developers, founders, and anyone interested in contributing to the Cairo and StarkNet ecosystems.We welcome individuals with a passion for blockchain technology and a desire to build and collaborate.",
        
      ]
    }
  ];

  return (
    <div className='p-12'>
     
      {accordionIds.map((item, index) => (
        <Accordion
          key={index}
          i={index}
          expanded={expanded}
          setExpanded={setExpanded}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FAQs;
