import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  i: number;
  expanded: number | false;
  setExpanded: (i: number | false) => void;
  title: string;
  description: Array<string | { text: string; bullet: boolean }>;
}

const Accordion: React.FC<AccordionProps> = ({ i, expanded, setExpanded, title, description }) => {
  const isOpen = i === expanded;

  return (
    <div style={{ width: '1040px', minHeight: '44px', marginBottom: '10px', padding: '10px' }}>
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgba(256, 256, 256, 0.05)',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          cursor: 'pointer',
          color: '#FFFFFF',
          border: '1px solid #FFFFFF',
          width: '100%',
          boxSizing: 'border-box',
          borderRadius: '20px',
        }}
      >
        <div style={{ width: '100%' ,display:'flex' , flexDirection:'row', justifyContent:'space-between',alignItems:"center" }}>
          {title}
          <img src='/down.png' width='24px' height='24px' alt='down' />
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight:'600px' }} 
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] ,delayChildren: 0.5,
                staggerDirection: -1  }}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                overflow: 'hidden',
                paddingTop: '10px',
                fontWeight:'lighter',
                fontSize: '14px',
                lineHeight: '32px'
              }}
            >
              {description.map((item, idx) => (
                typeof item === 'string' ? (
                  <p key={idx}>{item}</p>
                ) : (
                  item.bullet ? (
                    <ul key={idx} style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                      <li>{item.text}</li>
                    </ul>
                  ) : (
                    <p key={idx}>{item.text}</p>
                  )
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Accordion;
