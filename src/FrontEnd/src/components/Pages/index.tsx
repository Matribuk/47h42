import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import BlockSet from '../Block/block';

const Page1 = () => {
  return <div>This is Page 1</div>;
};

const Page2 = () => {
    return <div>This is Page 2
        <BlockSet />
    </div>;
};

const Page3 = () => {
        interface ButtonProps {
            backgroundColor: string;
            color: string;
            children: React.ReactNode;
        }
        function Button(props: ButtonProps) {
            const handleClick = () => {
                window.open("", "Selection de blocs", "width=600,height=400");
            };
            return (
                <button style={{ backgroundColor: props.backgroundColor, color: props.color }} onClick={handleClick}>
                <FontAwesomeIcon icon={faHome} /> {props.children}
                </button>
            );
        }

        const [showInfo, setShowInfo] = useState(false);

        return <div>
            <Button backgroundColor="#012949" color="#fff">HOME</Button>
            <div style={{
            width: '200px',
            height: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '44px',
            background: 'linear-gradient(145deg, #5890d3, #69abfa)',
            boxShadow:  '5px 5px 10px #3f6696,-5px -5px 10px #85daff',
            marginLeft: '50px'
            }} onClick={() => alert('Bloc cliqué!')}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}>
                BSQ
                {showInfo && (
                    <div style={{
                        position: 'absolute',
                        border: '58px',
                        top: '0',
                        left: '0',
                        background: '#ffffff',
                        padding: '10px'
                    }}>
                        Informations supplémentaires sur le bloc BSQ
                    </div>
                )}
            </div>
            <canvas id="c" width={100} height={100} />
        </div>;
};

const Pages = { Page1, Page2, Page3 };

export default Pages;
