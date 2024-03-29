'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './AnimeCat.module.scss';

function AnimeCat() {
  const codePaths = [
    'M 113.54839,110.26613 92.701612,104.58871',
    'm 90.129031,103.79032 -13.57258,-3.63709',
    'M 111.0899,112.97171 96.349001,109.0199',
    'M 93.90264,108.39263 79.663562,104.44081',
    'M 111.2255,116.3064 99.663396,113.27519',
    'm 97.392558,112.63527 -9.865289,-2.5262',
    'm 85.566573,109.46565 -8.230571,-2.14604',
    'm 115.22989,121.50261 -12.35726,-3.32454',
    'M 101.05354,117.80171 86.689008,113.91262',
    'm 84.619011,113.22262 -6.52363,-1.69363',
    'm 111.21535,123.88625 -5.70818,-1.50546',
    'm 103.12354,121.81625 -5.519996,-1.38',
    'm 94.843546,119.80898 -4.892723,-1.25454',
    'm 88.006281,117.92716 -6.962722,-1.69363',
    'm 111.40353,127.83806 -15.995437,-4.14',
    'M 93.077072,122.99795 80.67731,119.69364',
    'm 115.73171,132.5426 -7.02545,-1.94454',
    'M 106.01522,129.91429 95.966411,127.14183',
    'm 93.219656,126.40235 -8.419477,-2.33494',
  ];

  // Current path's index
  const [currentPathIndex, setCurrentPathIndex] = useState<number>(0);

  // Show the next path, memoized using useCallback
  const showNextPath = useCallback(() => {
    setCurrentPathIndex((prevIndex) =>
      // Increment the index or reset when codePaths.lenght reached
      prevIndex < codePaths.length - 1 ? prevIndex + 1 : 0
    );
  }, [codePaths.length]);

  useEffect(() => {
    // Set up interval for displaying paths
    let intervalId = setInterval(showNextPath, 100);
    // Total time for the display all paths
    let totalAnimationTime = codePaths.length * 100;

    // Clear paths, reset animation, and restart
    const resetAnimation = () => {
      setCurrentPathIndex(0); // Reset to the first path
      clearInterval(intervalId); // Clear the current interval
      setTimeout(() => {
        intervalId = setInterval(showNextPath, 100);
      }, totalAnimationTime);
    };

    // Start the reset animation loop
    const resetAnimationInterval = setInterval(() => {
      if (currentPathIndex === codePaths.length - 1) {
        resetAnimation();
      }
    }, totalAnimationTime);

    // Clear intervals on component unmount
    return () => {
      clearInterval(intervalId);
      clearInterval(resetAnimationInterval);
    };
  }, [currentPathIndex, showNextPath, codePaths.length]);

  return (
    <div className={styles.cat}>
      <svg
        viewBox="0 0 243.78358 112.04961"
        version="1.1"
        id="svg237"
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="0 0 200 200"
      >
        {/* TABLE */}
        <g
          style={{ display: 'inline' }}
          transform="translate(-46.301759,-61.011404)"
        >
          <path
            className={styles.table}
            d="M 289.90636,172.45923 46.480747,100.0569 Z"
          />
        </g>

        {/* LAPTOP */}
        <g
          style={{ display: 'inline' }}
          transform="translate(-46.301759,-61.011404)"
        >
          <path
            className={styles.base}
            d="m 141.9216,159.85813 63.35588,-9.15325 -79.81424,-23.5872 -57.869753,7.92107 z"
          />
          <rect
            className={styles.keyboard}
            width="9.8198261"
            height="1.5436964"
            x="-181.93135"
            y="-95.056725"
            ry="0.76570493"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="9.0769787"
            height="1.5392768"
            x="-148.48961"
            y="-104.44665"
            ry="0.76963842"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="7.0122204"
            height="1.5302271"
            x="-190.39523"
            y="-95.102654"
            ry="0.68668449"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="6.1994228"
            height="1.5429597"
            x="-156.22212"
            y="-104.47525"
            ry="0.77147985"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="6.784143"
            height="1.5325842"
            x="-198.6543"
            y="-95.121452"
            ry="0.7662921"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="12.10663"
            height="1.4881213"
            x="-170.61276"
            y="-95.043716"
            ry="0.707178"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="20.297974"
            height="1.5728859"
            x="-220.47177"
            y="-95.156212"
            ry="0.74108511"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="18.804581"
            height="1.4748495"
            x="-170.89034"
            y="-98.132233"
            ry="0.70535189"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="22.415939"
            height="1.5514624"
            x="-200.23549"
            y="-104.64015"
            ry="0.72871792"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="15.141185"
            height="1.5422479"
            x="-227.44597"
            y="-92.048576"
            ry="0.73356473"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="10.601194"
            height="1.4491302"
            x="-174.66748"
            y="-91.92794"
            ry="0.7181499"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="34.397484"
            height="1.5929438"
            x="-210.73256"
            y="-91.972992"
            ry="0.73882747"
            transform="matrix(-0.95865635,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="18.584864"
            height="1.5433018"
            x="-176.37804"
            y="-104.62187"
            ry="0.77165091"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="28.800055"
            height="1.5856607"
            x="-213.27954"
            y="-98.272385"
            ry="0.7191152"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="27.788345"
            height="1.5917872"
            x="-189.53972"
            y="-101.48013"
            ry="0.79589361"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="10.307245"
            height="1.545503"
            x="-182.74002"
            y="-98.242455"
            ry="0.72681344"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="15.569641"
            height="1.5531008"
            x="-206.76373"
            y="-101.43678"
            ry="0.71250767"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
          <rect
            className={styles.keyboard}
            width="14.715637"
            height="1.5445677"
            x="-160.12363"
            y="-101.3067"
            ry="0.77228385"
            transform="matrix(-0.95865634,-0.28456639,0.38494528,-0.9229394,0,0)"
            rx="1.9090753"
          />
        </g>

        {/* LAPTOP SCREEN */}
        <g
          transform="matrix(0.99696458,0,0,0.99669796,-46.093192,-60.708181)"
          style={{ display: 'inline' }}
        >
          <path
            className={styles.screen}
            d="M 126.5,144.95161 121,106.27419 69.370966,92.435483 76.822579,128.80645 Z"
          />
        </g>

        {/* LAPTOP SCREEN CODE */}
        <g
          transform="matrix(0.99696458,0,0,0.99669796,-46.093192,-60.708181)"
          style={{ display: 'inline' }}
        >
          {/* Display all code paths with the animation */}
          {codePaths.map((path, index) => (
            <path
              key={index}
              className={`${styles.code} ${
                index <= currentPathIndex ? styles.displayed : ''
              }`}
              d={path}
            />
          ))}
        </g>

        {/* CAT STATIC */}
        <g
          className={`${styles.cat} ${styles.static}`}
          transform="translate(-46.301759,-61.011404)"
        >
          <path
            className={styles.face}
            d="m 168.13692,100.45843 c -0.59158,-0.13851 -1.1569,-0.44732 -1.25627,-0.686248 -0.1289,-0.309934 0.57715,-0.434414 2.464,-0.434414 2.38075,0 2.78065,-0.111477 4.00733,-1.117088 l 1.36266,-1.117087 1.5874,1.117087 c 1.43422,1.009286 1.86761,1.117088 4.49096,1.117088 2.05516,0 2.85192,0.124135 2.72686,0.42484 -0.52185,1.254782 -5.39775,1.094532 -7.33505,-0.241067 l -1.17917,-0.812935 -1.3447,0.817712 c -1.49846,0.911212 -3.88984,1.314722 -5.52402,0.932112 z m 4.66471,-5.349992 c -0.68827,-0.575781 -1.16268,-1.321075 -1.07451,-1.688018 0.13418,-0.558428 0.58858,-0.657037 3.02775,-0.657037 2.43917,0 2.89358,0.09861 3.02776,0.657037 0.18582,0.773333 -1.9808,2.718999 -3.02776,2.718999 -0.39647,0 -1.27543,-0.463942 -1.95324,-1.030981 z m -11.75897,-3.379461 c -1.34048,-1.29455 -0.89291,-4.587016 0.68971,-5.073769 1.08132,-0.332571 1.93779,0.836788 1.93779,2.645739 0,2.495547 -1.30698,3.703304 -2.6275,2.42803 z m 24.36914,-0.186034 c -0.669,-1.001893 -0.56122,-3.686264 0.18013,-4.486434 1.32934,-1.434815 3.23467,0.891842 2.6363,3.21927 -0.50126,1.949706 -1.9311,2.593022 -2.81643,1.267164 z"
          />
          <path
            className={styles.tail}
            d="m 244.38522,153.30531 c 3.93488,1.53645 7.59263,-0.41994 10.91454,-2.63454 12.20685,-8.1379 -11.10151,-28.22773 -2.00727,-31.86543 21.16998,-8.468 34.0395,42.46507 -7.52727,40.01997"
            transform="translate(1.1041667e-6)"
          />
          <path
            className={styles.body}
            d="m 144.95161,118.69355 c 4.14606,-12.24842 -2.86713,-45.745775 5.67742,-54.290324 3.4713,-3.471296 12.20745,4.933257 14.01613,6.741935 0.88987,0.889868 14.49926,-1.596774 17.20968,-1.596774 1.44741,0 4.71939,0.922557 5.85484,0.354838 2.50641,-1.253209 7.28831,-9.92842 11.17741,-7.98387 16.42197,8.210983 47.78729,77.927495 45.41936,96.870965"
          />
          <path
            className={styles.ears}
            d="m 153.77822,69.149192 c -1.19723,-0.02921 -2.23118,0.958342 -2.75,1.995969 -4.05636,8.112725 6.83835,5.519298 8.78226,2.927419 1.67694,-2.235917 -4.37098,-5.338704 -6.03226,-4.923388 z"
          />
          <path
            className={styles.ears}
            d="m 197.43391,65.361756 c -1.94641,-0.228389 -6.13679,4.18184 -4.32818,5.990449 1.10823,1.108234 2.985,0.926137 4.3909,1.160455 1.02293,0.170487 2.7952,0.326123 3.63818,-0.376365 1.94702,-1.622517 -2.11632,-6.774539 -3.7009,-6.774539 z"
          />
          <path
            className={styles.mustache}
            d="m 162.33871,98.645161 c -6.8194,1.096809 -14.01768,-0.243565 -20.66936,1.419359"
            transform="translate(1.1041667e-6)"
          />
          <path
            className={styles.mustache}
            d="m 161.45161,95.806449 c -7.16985,0.640385 -14.33525,-0.620966 -21.46774,-0.620966"
            transform="translate(1.1041667e-6)"
          />
          <path
            className={styles.mustache}
            d="m 193.38709,97.491935 c 6.24253,0.515586 12.46646,1.629532 18.62904,2.749995"
            transform="translate(1.1041667e-6)"
          />
          <path
            className={styles.mustache}
            d="m 193.56451,95.362902 c 6.02274,-0.162121 12.38281,0.64602 18.2742,-0.532257"
            transform="translate(1.1041667e-6)"
          />
        </g>

        {/* CAT PAW ANIMATION */}
        <g
          className={`${styles.cat} ${styles.animation}`}
          transform="translate(-46.301759,-61.011404)"
        >
          <path
            className={styles.pawr}
            d="m 173.88891,132.20679 c -3.08163,0.69516 -6.03429,1.98494 -8.90726,3.26182 -3.37923,1.50188 -19.53761,9.61646 -8.02909,11.91817 10.80904,2.16181 27.74102,-4.71324 38.9536,-5.95909"
          />
          <path
            className={styles.pawrup}
            d="m 173.88052,131.98457 c -1.20069,-25.88066 12.45731,-16.70541 19.81472,0.88448"
          />
          <path
            className={`${styles.pawrup} ${styles.pad}`}
            d="m 183.61163,125.9968 c -0.95613,-0.41367 -1.88478,-0.47409 -2.88545,-0.18818 -3.22037,0.9201 -1.87751,5.237 2.07,4.57908 1.99025,-0.33171 2.91498,-3.55109 0.81545,-4.3909 z"
          />
          <path
            className={`${styles.pawrup} ${styles.pad}`}
            d="m 177.58982,123.80135 0.43909,-0.18819"
          />
          <path
            className={`${styles.pawrup} ${styles.pad}`}
            d="m 181.03981,123.04862 -0.18818,0.12545"
          />
          <path
            className={`${styles.pawrup} ${styles.pad}`}
            d="m 183.61163,123.42498 0.25091,-0.18818"
          />

          <path
            className={styles.pawl}
            d="m 154.70968,130.40323 c -24.6007,8.42334 -39.61075,5.75452 -10.29033,-11.00001"
          />
          <path
            className={styles.pawlup}
            d="m 144.50806,118.87097 c -9.23617,-21.585256 11.36298,-14.66912 16.05645,0.9758"
          />
          <path
            className={`${styles.pawlup} ${styles.pad}`}
            d="m 150.93075,111.13045 0.0627,-0.50182"
          />
          <path
            className={`${styles.pawlup} ${styles.pad}`}
            d="m 148.17075,111.38136 -0.25091,-0.31364"
          />
          <path
            className={`${styles.pawlup} ${styles.pad}`}
            d="m 145.59894,111.88317 0.12545,0.25091"
          />
          <path
            className={`${styles.pawlup} ${styles.pad}`}
            d="m 150.24075,113.51408 c -0.54449,-0.0164 -0.99134,-0.0715 -1.44272,0.25091 -1.93033,1.37881 -1.34333,4.50162 1.25454,4.26545 3.19212,-0.29019 2.81866,-3.63953 0.18818,-4.51636 z"
          />
        </g>

        {/* LAPTOP COVER */}
        <g
          style={{ display: 'inline' }}
          transform="translate(-46.301759,-61.011404)"
        >
          <path
            className={styles.cover}
            d="M 141.58064,159.67742 67.419354,135.19355 55,76.999998 132.35484,97.580645 Z"
          />
        </g>
      </svg>
    </div>
  );
}

export default AnimeCat;
