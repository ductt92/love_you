import { TypeAnimation } from 'react-type-animation';

import { stringHtml } from '@/utils/ultils';

const HomePage = () => {
  const DURATION = 2000;
  return (
    <div className='snowflakes' aria-hidden='true'>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div className='snowflake'>❅</div>
      <div className='snowflake'>❆</div>
      <div className='snowflake'>❄</div>
      <div
        dangerouslySetInnerHTML={{ __html: stringHtml }}
        className='h-[70vh] w-screen text-center'
      />
      <div className='h-[30vh]'>
        <TypeAnimation
          sequence={[
            'Merry Christmas 🎄🎄🎄',
            DURATION,
            'Gửi tới cậu tình yêu của tớ  ❤❤❤',
            DURATION,
            'Trong lòng tớ hiện tại đang rất hạnh phúc',
            DURATION,
            'Vì có cậu ở bên đó 😉😉😉',
            DURATION,
            'Thời gian qua mình đã cùng nhau làm nhiều việc lắm nhỉ 😝😝😝',
            DURATION,
            'Những việc mà trước đó tớ chỉ có thể thấy trong giấc mơ thôi 🤣🤣🤣',
            DURATION,
            'Cám ơn cậu thời gian qua đã nuông chiều tớ nhé !!! 😍😍😍',
            DURATION,
            'Tớ nhận ra là tớ ngày càng yêu cậu nhiều hơn mất rồi 💘💘💘',
            DURATION,
            'Cám ơn bé bự của tớ nhiều lắm nha 😘😘😘',
            DURATION,
            'Nếu cậu có vào và đọc lại những dòng chữ này',
            DURATION,
            'Thì ATM của cậu chúc cậu một ngày vui vẻ nha 😉😉😉',
            DURATION,
          ]}
          speed={50}
          wrapper='h2'
          className='snowCss text-center text-xl text-[#f5576c]'
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default HomePage;
