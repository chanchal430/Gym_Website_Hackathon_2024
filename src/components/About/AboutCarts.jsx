import React from 'react';
import { cardList } from "./CardList";
import { useNavigate } from 'react-router-dom';

function AboutCarts() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to exercises section
    const exercisesSection = document.getElementById('exercises');
    console.log('exercisesSection:', exercisesSection);
    if (exercisesSection) {
      exercisesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardClick = (title) => {
    if (title === 'Workout') {
      handleClick();
    } else if (title === 'Nutritions') {
      navigate('/nutrition');
    }
  };

  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
          onClick={() => handleCardClick(card.title)} // Attach click handler to the entire card
          style={{ cursor: 'pointer' }} // Set cursor to pointer for visual feedback
        >
          <img
            src={card.img}
            alt="box_img"
            className="w-[75px] mb-4"
          />
          <p className="text-[24px] font-bold uppercase mb-7">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCarts;
