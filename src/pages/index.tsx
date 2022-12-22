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
            'Cám ơn cậu thời gian qua trò chuyện cùng tớ 😘😘😘',
            DURATION,
            'Lâu rồi tớ mới thấy trái tim tớ đập nhanh đến vậy 😓😓😓',
            DURATION,
            'Thời gian tớ cảm thấy rất hạnh phúc 🙆🙆🙆',
            DURATION,
            'Cuộc sống của tớ bớt nhàm chán hơn khi có cậu đó 😅😅😅',
            DURATION,
            'Tớ cũng rất xin lỗi vì đã làm cậu giận 🙇🏼‍♂️  🙇🏼‍♂️  🙇🏼‍♂️ ',
            DURATION,
            'Và cuối cùng tớ chúc cậu ngày giáng sinh vui vẻ ღღღ',
            DURATION,
            'À!!! Cậu đã hứa là cậu luôn cười rồi đó nhé 👌👌👌',
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
