import React from 'react';

function NoticeBoard() {
  return (
    <div className="notice-board-main-wrapper">
      <h1>
        নোটিশ <span>বোর্ড</span>
      </h1>

      <div className="notice-bord-table-wrapper">
        <div className="notice-body notice-board-header">
          <div className="notice-date-div">তারিখ</div>
          <div className="notice-title-div">নোটিশ</div>
          <div className="notice-read-div">লিঙ্ক</div>
        </div>

        <div className="notice-body">
          <div className="notice-date-div">২৪ সেপ্টেম্বর ২০২৩</div>
          <div className="notice-title-div">
            বৃহত্তর ছাত্র-ছাত্রীদের সহযোগিতা ও সহযোগিনী প্রশংসা সম্পর্কিত
          </div>
          <div className="notice-read-div">
            <a href="https://gripetech.com/demo/post-notice/%e0%a6%ac%e0%a7%83%e0%a6%b9%e0%a6%a4%e0%a7%8d%e0%a6%a4%e0%a6%b0-%e0%a6%9b%e0%a6%be%e0%a6%a4%e0%a7%8d%e0%a6%b0%e0%a7%80%e0%a6%a6%e0%a7%87%e0%a6%b0/">
              বিজ্ঞপ্তিটি পড়ুন
            </a>
          </div>
        </div>

        {/* Add more notice items using the same structure */}
        {/* ... Your additional notice items ... */}

        {/* Pagination */}
        <div className="pagination">{/* Pagination content goes here */}</div>
      </div>
    </div>
  );
}

export default NoticeBoard;
