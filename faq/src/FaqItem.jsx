/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const FaqItem = ({ index, faq }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) setIsShow(true);
  }, [index]);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="faq-box" key={index}>
      <div className="question" onClick={toggleShow}>
        <button className={isShow ? 'arrow' : ''}>&gt;</button>
        <div>{faq.question}</div>
      </div>
      {isShow && <div className="answer">{faq.answer}</div>}
    </div>
  );
};

export default FaqItem;
