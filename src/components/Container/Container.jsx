import css from './Container.module.css';
import React from 'react';

const Container = ({ children }) => {
  // const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  // useEffect(() => {
  //   // set initial value
  //   const mediaWatcher = window.matchMedia("(max-width: 500px)");
  //   setIsNarrowScreen(mediaWatcher.matches);

  //   //watch for updates
  //   function updateIsNarrowScreen(e) {
  //     setIsNarrowScreen(e.matches);
  //   }
  //   mediaWatcher.addEventListener("change", updateIsNarrowScreen);

  //   // clean up after ourselves
  //   return function cleanup() {
  //     mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
  //   };
  // }, []);

  const tablet = window.matchMedia('(min-width:834px)').matches;
  const desktop = window.matchMedia('(min-width:1440px)').matches;
  if (desktop) {
    return (
      <div
        style={{
          width: 1440,
          outline: 1,
          outlineColor: 'tomato',
          outlineStyle: 'solid',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: 34,
          paddingRight: 34,
        }}
        className={css.Container}
      >
        {children}
      </div>
    );
  } else {
    if (tablet) {
      return (
        <div
          style={{
            width: 834,
            outline: 1,
            outlineColor: 'tomato',
            outlineStyle: 'solid',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 27,
            paddingRight: 27,
          }}
          className={css.Container}
        >
          {children}
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: 320,
            outline: 1,
            outlineColor: 'tomato',
            outlineStyle: 'solid',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 10,
            paddingRight: 10,
          }}
          className={css.Container}
        >
          {children}
        </div>
      );
    }
  }
};

export default Container;
