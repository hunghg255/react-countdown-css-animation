import './App.css';

import * as React from 'react';
import { GithubCorners } from 'react-gh-corners';

import { DECIMAL, SENARY } from './common';

// const DECIMAL = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// const SENARY = [0, 5, 4, 3, 2, 1, 0];

/**
 File bundle js của shopee: https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/285.299c9a9aac67d6f27cab.legacy.js

 css: https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/285.4a7d0b5a5afbb3a418d5.legacy.css
 */

export default function App() {
  const { h, f, m, _, v, g, y, n, diff } = React.useMemo(() => {
    const nextDate = new Date('2023-12-30T20:00:00');
    const nowDate = new Date();

    const diff = nextDate.getTime() - nowDate.getTime();

    const vc = 60;

    const t = (function (e) {
      let t = Math.floor(e / 1000);
      const n = Math.floor(t / 3600);
      return (
        (t %= 3600),
        {
          hour: n || 0,
          minute: Math.floor(t / vc) || 0,
          second: t % vc || 0,
        }
      );
    })(diff);

    const n = t.hour;
    const r = t.minute;
    const o = t.second;

    const p = (function (e, t, n) {
      return {
        secondDecaDelay: `${(n % 10) - 9}s`,
        secondHexaDelay: `${n - 68}s`,
        minuteDecaDelay: `${(t % 10) * vc + n - 658}s`,
        minuteHexaDelay: `${t * vc + n - 4198}s`,
        hourDecaDelay: `${(e % 10) * 3600 + t * vc + n - 39_598}s`,
        hourHexaDelay: `${(e % 100) * 3600 + t * vc + n - 395_998}s`,
        hourHundDelay: `${(e % 1000) * 3600 + t * vc + n - 3_959_998}s`,
      };
    })(n, r, o);

    const h = p.hourHundDelay;
    const f = p.hourDecaDelay;
    const m = p.hourHexaDelay;
    const _ = p.minuteDecaDelay;
    const v = p.minuteHexaDelay;
    const g = p.secondDecaDelay;
    const y = p.secondHexaDelay;

    return {
      h,
      f,
      m,
      _,
      v,
      g,
      y,
      n,
      diff,
    };
  }, []);

  if (diff < 0) {
    return <h1>Finished</h1>;
  }

  return (
    <div className='App'>
      <h1>React Countdown CSS Animation</h1>

      <div className='shopee-countdown-timer VkoLnD'>
        {n > 99 && (
          <React.Fragment>
            <div className='shopee-countdown-timer__number'>
              <div
                className='shopee-countdown-timer__number__deca shopee-countdown-timer__number__hund--hour'
                style={{ animationDelay: h }}
              >
                {DECIMAL.map((it) => it)}
              </div>
            </div>

            <div className='shopee-countdown-timer__colon shopee-countdown-timer__colon--flashing-off'>
              <div className='colon-dot__wrapper'>
                <span className='colon-dot' />
              </div>
              <div className='colon-dot__wrapper'>
                <span className='colon-dot' />
              </div>
            </div>
          </React.Fragment>
        )}

        <div className='shopee-countdown-timer__number'>
          <div
            className='shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--hour'
            style={{ animationDelay: m }}
          >
            {DECIMAL.map((it) => it)}
          </div>
          <div
            className='shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--hour'
            style={{ animationDelay: f }}
          >
            {DECIMAL.map((it) => it)}
          </div>
        </div>

        <div className='shopee-countdown-timer__colon shopee-countdown-timer__colon--flashing-off'>
          <div className='colon-dot__wrapper'>
            <span className='colon-dot' />
          </div>
          <div className='colon-dot__wrapper'>
            <span className='colon-dot' />
          </div>
        </div>

        <div className='shopee-countdown-timer__number'>
          <div
            className='shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--minute'
            style={{ animationDelay: v }}
          >
            {SENARY.map((it) => it)}
          </div>
          <div
            className='shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--minute'
            style={{ animationDelay: _ }}
          >
            {DECIMAL.map((it) => it)}
          </div>
        </div>

        <div className='shopee-countdown-timer__colon shopee-countdown-timer__colon--flashing-off'>
          <div className='colon-dot__wrapper'>
            <span className='colon-dot' />
          </div>
          <div className='colon-dot__wrapper'>
            <span className='colon-dot' />
          </div>
        </div>

        <div className='shopee-countdown-timer__number'>
          <div
            className='shopee-countdown-timer__number__hexa shopee-countdown-timer__number__hexa--second'
            style={{ animationDelay: y }}
          >
            {SENARY.map((it) => it)}
          </div>

          <div
            className='shopee-countdown-timer__number__deca shopee-countdown-timer__number__deca--second'
            style={{ animationDelay: g }}
          >
            {DECIMAL.map((it) => it)}
          </div>
        </div>
      </div>

      <GithubCorners href='https://github.com/hunghg255/react-countdown-css-animation' />
    </div>
  );
}
