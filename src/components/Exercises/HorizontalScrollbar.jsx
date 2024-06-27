import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../../images/icons/right-arrow.png';
import LeftArrowIcon from '../../images/icons/left-arrow.png';

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const LeftArrow = ({ canScroll, onClick }) => (
  <Typography onClick={onClick} className="left-arrow">
    <img src={LeftArrowIcon} alt="left-arrow" />
  </Typography>
);

const RightArrow = ({ canScroll, onClick }) => (
  <Typography onClick={onClick} className="right-arrow">
    <img src={RightArrowIcon} alt="right-arrow" />
  </Typography>
);

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > 1024 ? 3 : width > 640 ? 2 : 1;
  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (data.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref}>
      <div className="relative overflow-hidden p-4 text-center">
        <ScrollMenu LeftArrow={<LeftArrow canScroll={CAN_SHIFT_LEFT} onClick={shiftLeft} />} RightArrow={<RightArrow canScroll={CAN_SHIFT_RIGHT} onClick={shiftRight} />}>
          <motion.div animate={{ x: offset }} className="flex">
            {data.map((item) => (
              <Box
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  marginRight: MARGIN,
                  backgroundImage: `url(${item.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                {bodyParts ? (
                  <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
                ) : (
                  <ExerciseCard exercise={item} />
                )}
              </Box>
            ))}
          </motion.div>
        </ScrollMenu>
      </div>
    </section>
  );
};

export default HorizontalScrollbar;

