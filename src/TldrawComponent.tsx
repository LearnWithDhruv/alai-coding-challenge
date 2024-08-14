import React from 'react';

interface TldrawComponentProps {
  numItems: number;
}

const TldrawComponent: React.FC<TldrawComponentProps> = ({ numItems }) => {
  const drawItems = () => {
    const items = [];
    const spacing = 150;
    const startX = 50; 
    for (let i = 0; i < numItems; i++) {
      items.push(
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '100px',
            left: `${startX + i * spacing}px`,
            width: '100px',
            height: '50px',
            backgroundColor: 'lightblue',
            borderRadius: '10px',
            textAlign: 'center',
            lineHeight: '50px',
            fontSize: '16px',
          }}
        >
          Item {i + 1}
        </div>
      );
    }

    return items;
  };

  return (
    <div style={{ position: 'relative', height: '300px', border: '1px solid black', overflowX: 'scroll' }}>
      {drawItems()}
    </div>
  );
};

export default TldrawComponent;
