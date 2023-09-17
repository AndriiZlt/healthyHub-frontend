//import React, { useEffect, useState } from 'react';
import React from 'react';
import css from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Action from './Action/Action';
import loseFat from '../../assets/Lose_fat.png';
import waight from '../../assets/Waight_image.png';
import useMediaQuery from 'hooks/useMediaQuery';



const Header = () => {
  const isMobile = useMediaQuery('(max-width:833px)');
  const isLoggedIn = false;

  return (
    <div className={css.header}>
      {!isLoggedIn ? (
        <>
          <Logo />
          <Navigation />
        </>
      ) : (
        <>
          <Logo />
          <div className={css.header_action}>
            {isMobile ? (
              <Action
                isMobile={true}
                child={
                  <>
                    <Action type="Goal" image={loseFat} text="Lose fat" />
                    <Action
                      type="Weight"
                      image={waight}
                      text="65 kg"
                      editIcon={true}
                    />
                  </>
                }
              />
            ) : (
              <>
                <Action type="Goal" image={loseFat} text="Lose fat" />
                <Action
                  type="Weight"
                  image={waight}
                  text="65 kg"
                  editIcon={true}
                />
              </>
            )}

            <Action
              text="Konstantin"
              userAction={true}
              image="https://i.ibb.co/Qj72cs1/among-us.png"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
