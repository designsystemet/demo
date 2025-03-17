import classes from "./Topbar.module.css";
import { MagnifyingGlassIcon, GlobeIcon } from "@navikt/aksel-icons";
import { Button } from "@digdir/designsystemet-react";

export const Topbar = () => {
  return (
    <div className={classes.topbar} data-color="neutral">
      <div className={`${classes.topbarContainer} container`}>
        <div className={classes.left}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="143"
            height="38"
            viewBox="0 0 143 38"
            fill="none"
          >
            <title>Company Logo</title>
            <g clip-path="url(#clip0_12537_16260)">
              <path
                d="M15.609 0.354492C15.8008 0.452784 15.9907 0.626453 16.1861 0.635498C16.5841 0.654192 16.9489 0.721127 16.8579 1.18907C16.8163 1.39952 16.4804 1.55329 16.1674 1.83068C16.1897 1.85178 16.3375 2.10505 16.4991 2.11349C17.0394 2.14063 17.6153 2.67189 18.2454 2.02063C18.0187 1.9549 17.8239 1.95791 17.7727 1.87229C17.6527 1.67751 17.602 1.43872 17.5236 1.21922C17.9928 1.07691 18.4613 0.8357 18.9317 0.829067C19.1976 0.824846 19.4955 1.17761 19.7282 1.41821C19.8175 1.51108 19.8464 1.82646 19.7765 1.88314C19.5871 2.03751 19.3284 2.10565 18.9805 2.26364C19.0734 2.36133 19.1964 2.60797 19.3393 2.62003C19.914 2.67008 20.5212 3.18807 21.1435 2.52113C20.9644 2.47711 20.8101 2.48495 20.751 2.41319C20.6159 2.25339 20.4428 2.04837 20.4537 1.87168C20.4597 1.75651 20.7648 1.56414 20.9307 1.56957C21.3703 1.58465 21.8105 1.68957 22.2935 1.76555C21.9274 2.33299 21.5548 2.90887 21.1827 3.48656C21.9745 3.92375 22.1252 4.43812 21.5801 5.14184C21.158 5.68637 21.0446 6.23692 21.1031 6.88999C21.1918 7.91331 20.9397 8.87693 20.5079 9.80135C20.1305 10.6094 19.7349 11.412 19.4044 12.2393C19.1204 12.9509 18.9178 13.6938 18.6567 14.4886L18.3003 14.4452C18.3003 14.9704 18.2846 15.4613 18.3045 15.9515C18.3546 17.213 18.4221 18.4763 18.4788 19.7391C18.4993 20.1913 18.6663 20.415 19.1487 20.6056C19.967 20.9282 20.7142 21.439 21.4734 21.9039C22.7138 22.6637 23.9035 23.5188 25.188 24.1942C25.6975 24.4619 26.4314 24.4999 27.0145 24.3889C28.3309 24.1393 28.8459 22.8476 28.1192 21.7176C27.7725 21.1742 27.3136 20.6906 26.8511 20.2329C26.0026 19.3857 25.0794 18.612 24.2509 17.7479C22.5654 15.9913 22.5865 14.3348 24.3112 12.6066C25.5118 11.4024 26.7745 10.2627 27.9884 9.0711C29.0268 8.05441 29.833 6.90506 29.7685 5.36074C29.6997 3.67651 27.8889 2.64113 26.4603 3.48294C26.163 3.65721 25.9242 3.98284 25.7482 4.29099C25.5347 4.66908 25.5546 5.03752 26.0569 5.23652C26.8824 5.56757 27.1634 6.22064 27.1007 7.06848C27.0392 7.88436 26.9656 8.69663 26.435 9.60778C26.2915 8.71894 26.5327 7.89823 25.7759 7.32356C26.3632 9.07833 25.2477 9.82366 24.076 10.6058C23.4326 11.0351 22.9098 11.646 22.3297 12.173C22.241 12.2538 22.1403 12.3214 21.9256 12.4854C22.349 10.452 24.0259 9.13622 24.2286 7.12878L23.1015 8.09602L22.9116 7.95431C23.3246 7.26446 23.7455 6.57943 24.1471 5.88174C24.2943 5.62426 24.4698 5.35169 24.5126 5.06767C24.7954 3.18807 25.9236 2.21601 27.755 2.3155C29.4247 2.40656 30.7381 3.79832 30.7743 5.50727C30.7966 6.59572 30.4306 7.5714 29.8233 8.44456C29.1534 9.40999 28.4117 10.3266 27.7086 11.2709C27.4927 11.561 27.3015 11.8721 27.0374 12.2653H30.3082C30.117 12.4142 29.9675 12.5632 29.7908 12.6603C28.7789 13.2168 27.758 13.7547 26.748 14.3131C26.5731 14.4102 26.4356 14.5748 26.2517 14.7328H30.0211C29.909 14.8383 29.7823 15.0114 29.6099 15.1091C28.797 15.5734 27.9685 16.0112 27.152 16.4707C26.9638 16.5756 26.7974 16.7198 26.6225 16.8464C26.6448 16.8958 26.6653 16.9453 26.6877 16.9959H29.8294L29.9247 17.0948C29.0588 17.6035 28.1933 18.1126 27.3281 18.6223C27.8201 19.3568 28.2959 20.0695 28.7741 20.7847C29.195 21.4149 29.4736 22.0993 29.3862 22.8693C29.1769 24.7501 27.5301 25.8518 25.5636 25.3948C23.4567 24.9027 21.7272 23.6695 20.002 22.4436C19.6318 22.1795 19.3164 21.8297 18.9341 21.5837C18.7465 21.4619 18.4655 21.4842 18.2786 21.451C19.2844 22.5353 20.2414 23.6014 21.2388 24.6265C21.754 25.1536 22.309 25.6403 22.8989 26.0822C23.2155 26.321 23.6243 26.4567 24.0103 26.5797C24.7043 26.7992 25.4641 27.7405 25.5281 28.4647C25.5498 28.7132 25.6354 28.9725 25.756 29.1914C26.7112 30.9244 27.6838 32.6478 28.6463 34.3773C28.6643 34.4099 28.6432 34.4623 28.6318 34.639C28.2585 34.5709 27.8973 34.4774 27.5307 34.4436C27.1684 34.4124 26.8041 34.4116 26.4416 34.4412C25.765 34.4895 25.399 34.8151 25.4014 35.5532C25.402 35.763 25.1252 36.1574 24.9799 36.1556C24.357 36.149 24.1321 36.4951 24.0302 37.0263C23.9668 37.0288 23.9023 37.0306 23.8396 37.0318C23.8016 36.6645 23.6852 36.2834 23.7425 35.9313C23.804 35.5568 24.0271 35.2083 24.0603 34.75C23.8728 34.9297 23.6852 35.1112 23.4953 35.2885C23.1576 35.6026 22.8374 35.7558 22.3266 35.5393C22.0637 35.4284 21.6482 35.6816 21.2551 35.7829C21.5077 34.5202 22.3689 33.9896 23.681 33.9896L23.643 33.8038C23.5061 33.7496 23.3584 33.7152 23.2378 33.638C23.0087 33.4915 22.7982 33.3154 22.5739 33.1598C22.3206 32.9831 22.0625 32.8149 21.8129 32.6478C22.127 32.2776 23.11 32.1136 23.7027 32.4271C24.0639 32.6177 24.4275 32.8474 24.7098 33.1387C25.0462 33.4854 25.3502 33.5355 25.8434 33.2105C25.3393 32.5278 24.8551 31.8398 24.3365 31.1801C24.0675 30.8388 23.6774 30.5861 23.4489 30.2249C22.4611 28.674 20.9114 28.6691 19.3489 28.6571C18.5005 28.6529 17.6522 28.6294 16.8048 28.5865C16.604 28.5757 16.3984 28.4454 16.2181 28.3333C16.0523 28.2326 15.9214 28.0776 15.7688 27.9534C14.5417 26.9608 13.9447 25.8362 14.6599 24.2098C15.0651 23.286 15.2104 22.244 15.4432 21.249C15.6307 20.4422 15.5246 20.1594 15.0844 19.9073C14.7335 21.3316 14.5109 22.8223 13.9875 24.199C13.3972 25.7523 13.6625 26.9463 14.997 27.9359C14.7413 28.203 14.5574 28.3803 14.3903 28.5721C13.8922 29.1467 13.5479 29.7684 13.6335 30.5813C13.7089 31.2953 13.156 31.8977 12.4522 32.0382C12.1272 32.1027 11.7883 32.2312 11.52 32.4187C10.5032 33.1331 9.49964 33.8661 8.50972 34.6173C8.00982 34.9936 7.54067 35.4103 7.0679 35.8004C7.05946 35.763 6.99976 35.5496 6.96419 35.3331C6.89303 34.8995 6.5867 34.8036 6.21162 34.7536C5.78891 34.6969 5.72197 34.9628 5.62971 35.2812C5.39092 36.0983 4.58408 36.6308 3.67895 36.5542C4.08358 36.2159 4.43393 35.8987 4.03292 35.3506C3.96418 35.2565 4.1493 34.9254 4.27835 34.7494C4.40679 34.5733 4.61242 34.4533 4.92418 34.1892C4.58046 34.1892 4.41946 34.1681 4.2681 34.1928C3.7278 34.2881 3.27011 34.3013 2.9288 33.7061C2.83171 33.5379 2.30226 33.6175 1.97121 33.5825C2.00317 33.2062 2.52719 32.7371 3.29965 32.7371C3.8478 32.7371 4.39714 32.9928 5.12257 33.1791C4.8886 32.8667 4.79393 32.7003 4.66066 32.5719C4.31212 32.2396 4.13966 31.9465 4.47674 31.4503C4.60036 31.2681 4.3676 30.843 4.26147 30.3666C4.61061 30.5723 5.04298 30.685 5.22087 30.963C5.52901 31.4394 5.68398 32.0159 5.89263 32.555C5.9867 32.7968 6.03916 33.2527 6.14348 33.2623C6.50047 33.2967 6.97142 33.2955 7.21745 33.0905C7.89766 32.5182 8.48861 31.8398 9.11153 31.2C9.53002 30.7676 9.94309 30.328 10.3984 29.8504C9.69706 29.0581 10.0577 28.0215 10.0221 27.0464C10.0052 26.5296 10.1156 26.0062 10.1547 25.4846C10.2241 24.5306 10.6414 23.8137 11.4621 23.2806C12.3377 22.7125 13.168 22.0709 13.996 21.4335C14.1232 21.3371 14.2329 21.0494 14.1811 20.9143C13.8796 20.1099 13.5696 19.3037 13.1771 18.5433C13.01 18.2183 12.9829 18.0265 13.1958 17.7352C13.8169 16.894 14.4012 16.0251 15.0193 15.1809C15.249 14.8667 15.2816 14.646 14.7956 14.4603C12.8744 17.1654 10.9411 19.8892 8.91977 22.7379C8.78288 22.294 8.73344 21.995 8.59776 21.7405C8.50308 21.559 8.31072 21.3588 8.12921 21.3184C7.99836 21.2894 7.77705 21.4806 7.65645 21.6247C7.34047 22.001 7.39353 22.6631 6.73444 22.7933C6.67655 22.8054 6.65906 23.1111 6.65544 23.28C6.6464 23.9077 6.65243 24.5361 6.65243 25.1915H5.80519V22.6619L5.14247 23.447C5.02489 22.7668 5.25584 22.25 5.58569 21.7724C5.97102 21.2122 5.93182 20.8016 5.41745 20.4054C5.35172 20.3535 5.27514 20.2836 5.25403 20.2088C5.08277 19.5684 4.62448 19.3972 3.91594 19.5081C4.44961 18.8171 5.13403 18.9015 5.78529 18.8122V11.1177C5.37946 11.0592 5.00257 10.9314 4.64559 10.9766C4.35734 11.0134 4.09564 11.257 3.69463 11.4795C3.85925 10.1324 4.75051 9.56919 5.9077 9.2321C5.87819 9.16956 5.84905 9.10684 5.82026 9.04396C5.65142 9.00778 5.47293 8.9915 5.31373 8.92999C5.12257 8.85522 4.8271 8.77683 4.78308 8.63693C4.60036 8.03753 4.20237 7.76919 3.5891 7.69019C4.25423 7.15652 4.99413 7.31572 5.77142 7.42064V5.10988C5.20519 4.97179 4.74026 5.13943 4.32418 5.49581C3.51373 6.18868 2.70629 6.88396 1.93563 7.54667C1.13724 6.38707 0.425677 3.10184 0.612009 0.858011C2.2287 1.86264 3.57584 3.44073 5.7479 3.19108C5.7877 2.94143 5.81664 2.75088 5.85584 2.50726C6.05604 2.494 6.26107 2.47952 6.31534 2.4753C6.60057 2.80455 6.79594 3.04455 7.0064 3.26948C7.24941 3.52757 7.10469 4.86023 6.81886 5.10144C6.71695 5.18888 6.6072 5.33601 6.60358 5.45782C6.58469 6.19922 6.58509 6.94098 6.60479 7.68235C6.6078 7.82044 6.7278 7.95552 6.85564 8.22085C7.09263 7.56959 7.0275 6.9533 7.70348 6.70064C7.88318 6.6331 7.89464 6.11752 8.02248 5.67129C8.7455 6.92798 8.47354 7.94165 7.56057 8.81723C7.61906 8.92638 7.63353 8.99271 7.65886 8.99753C8.83354 9.19351 9.52761 10.2663 10.613 10.6371C10.6758 10.6594 10.7089 10.9495 10.6613 11.0797C10.4659 11.6309 10.2356 12.1694 10.0004 12.7507C8.9451 12.1965 8.41022 10.9423 7.20117 10.8012C7.1059 10.5298 7.01484 10.2759 6.92499 10.0215L6.70308 10.0745C6.6862 10.2572 6.65303 10.4405 6.65303 10.6233C6.64881 13.285 6.65906 15.9455 6.64097 18.606C6.63916 19.0794 6.80017 19.3809 7.36278 19.6347C7.26992 19.3254 7.2277 19.1276 7.15233 18.9443C6.99313 18.5644 6.96238 18.2599 7.23373 17.8601C7.40077 17.6158 7.23554 17.1443 7.21987 16.7849C7.85243 16.9742 8.34268 17.8341 8.31133 18.7483C8.30047 19.0534 8.25404 19.3574 8.26188 19.6613C8.26369 19.7885 8.36439 19.9127 8.42107 20.0382C8.53927 19.9712 8.71293 19.932 8.76359 19.8313C9.58731 18.2032 10.396 16.5684 11.2607 14.8287L9.966 14.7165C10.5793 13.1656 11.0587 11.5977 11.7998 10.1668C12.6868 8.45542 14.3873 7.86507 16.1867 7.57441C16.7162 7.48939 17.0074 7.2331 17.0183 6.63551C16.3176 6.53964 15.6102 6.44074 14.8372 6.33401C15.1875 5.88054 15.0892 5.51752 14.7925 5.09722C14.3095 4.41883 14.3234 4.06425 14.9517 3.52154C15.6543 2.9149 15.8762 2.27872 15.5132 1.41882C15.3708 1.08354 15.3123 0.712081 15.2159 0.357507C15.3479 0.354492 15.4794 0.354492 15.609 0.354492ZM20.6665 3.54324C19.1717 3.28515 17.8119 2.98726 16.4346 2.85761C16.0993 2.82626 15.5891 3.27792 15.3829 3.63611C15.1501 4.04073 15.6386 3.90325 15.8563 3.99671C16.8633 4.42787 16.9351 4.42184 17.441 3.45279C18.1128 3.60837 18.8243 3.71993 19.4973 3.94727C19.9731 4.10707 20.2734 3.99551 20.6665 3.54324ZM15.2026 9.57824C13.3001 9.65361 12.2014 10.6594 11.9777 12.3732C12.4016 12.5535 12.5626 12.2773 12.6941 11.9583C13.0703 11.0508 13.5172 10.2403 14.6617 10.1433C14.8257 10.1306 14.9674 9.83512 15.2026 9.57824ZM15.2665 5.18767C15.5095 5.48194 15.6271 5.76717 15.7936 5.80034C16.3791 5.9131 16.9821 5.93903 17.5899 5.99933C17.5327 5.28295 17.1377 5.13883 15.2665 5.18767ZM21.0127 5.05802L21.2279 5.06043C21.2557 4.76737 21.2834 4.47249 21.3093 4.17882L20.4905 4.28676C20.7292 4.63712 20.8704 4.84817 21.0127 5.05802Z"
                fill="#1F2C3D"
              />
              <path
                d="M12.0807 4.48047C12.6951 5.13112 13.6986 4.73193 14.3516 5.45494C13.0262 5.73414 11.9528 5.3054 12.0807 4.48047Z"
                fill="#1F2C3D"
              />
            </g>
            <path
              d="M46.4852 26.8242H43.9566L49.6382 11.0361H52.3903L58.0718 26.8242H55.5433L54.1017 22.6459H47.9345L46.4852 26.8242ZM48.6283 20.6416H53.4079L51.0798 13.9039H50.9564L48.6283 20.6416ZM68.8124 14.9832L64.5185 26.8242H62.0516L57.75 14.9832H60.2246L63.2234 24.0952H63.3467L66.3378 14.9832H68.8124ZM79.8517 17.874L77.7626 18.2441C77.4928 17.4501 76.8298 16.656 75.3959 16.656C74.0854 16.656 73.0986 17.3036 73.1064 18.2132C73.0986 19.015 73.6614 19.4544 74.9642 19.7628L76.8452 20.1945C79.0192 20.6955 80.083 21.7286 80.083 23.4014C80.083 25.5445 78.1018 27.0632 75.2418 27.0632C72.5821 27.0632 70.8399 25.8837 70.4545 23.7869L72.6824 23.4477C72.9599 24.6117 73.8464 25.2053 75.2263 25.2053C76.7373 25.2053 77.7163 24.4884 77.7163 23.571C77.7163 22.8309 77.1844 22.3222 76.0435 22.0678L74.0391 21.6283C71.8189 21.135 70.8014 20.0172 70.8014 18.3366C70.8014 16.2397 72.6978 14.829 75.3728 14.829C77.9322 14.829 79.3738 16.0316 79.8517 17.874ZM87.7207 27.0632C84.2285 27.0632 82.0854 24.658 82.0854 20.9808C82.0854 17.3421 84.2594 14.829 87.5588 14.829C90.2416 14.829 92.801 16.5018 92.801 20.7803V21.5975H84.3827C84.4444 23.8794 85.7703 25.1591 87.7439 25.1591C89.0544 25.1591 90.0566 24.5886 90.4728 23.4708L92.6545 23.864C92.1303 25.7912 90.3033 27.0632 87.7207 27.0632ZM84.3904 19.8707H90.5422C90.5345 18.0591 89.3627 16.7331 87.5743 16.7331C85.701 16.7331 84.4829 18.1901 84.3904 19.8707ZM97.6634 19.7936V26.8242H95.3584V14.9832H97.5709V16.9104H97.7174C98.2647 15.6538 99.4288 14.829 101.21 14.829C103.63 14.829 105.241 16.3631 105.241 19.2925V26.8242H102.936V19.57C102.936 17.8509 101.988 16.8256 100.423 16.8256C98.8198 16.8256 97.6634 17.9049 97.6634 19.7936ZM112.765 27.0555C109.89 27.0555 107.816 24.7582 107.816 20.9268C107.816 17.0877 109.921 14.829 112.781 14.829C114.986 14.829 115.772 16.1704 116.188 16.9027H116.327V11.0361H118.632V26.8242H116.381V24.9818H116.188C115.772 25.7372 114.924 27.0555 112.765 27.0555ZM113.274 25.0897C115.263 25.0897 116.366 23.3937 116.366 20.9037C116.366 18.4291 115.286 16.7871 113.274 16.7871C111.193 16.7871 110.144 18.5524 110.144 20.9037C110.144 23.2781 111.216 25.0897 113.274 25.0897ZM127.025 27.0632C123.533 27.0632 121.39 24.658 121.39 20.9808C121.39 17.3421 123.564 14.829 126.863 14.829C129.546 14.829 132.105 16.5018 132.105 20.7803V21.5975H123.687C123.749 23.8794 125.075 25.1591 127.048 25.1591C128.359 25.1591 129.361 24.5886 129.777 23.4708L131.959 23.864C131.435 25.7912 129.608 27.0632 127.025 27.0632ZM123.695 19.8707H129.847C129.839 18.0591 128.667 16.7331 126.879 16.7331C125.005 16.7331 123.787 18.1901 123.695 19.8707ZM134.663 26.8242V14.9832H136.891V16.8642H137.014C137.446 15.5922 138.633 14.8059 140.021 14.8059C140.314 14.8059 140.768 14.829 141 14.8598V17.0646C140.815 17.0106 140.275 16.9258 139.797 16.9258C138.163 16.9258 136.968 18.0436 136.968 19.5932V26.8242H134.663Z"
              fill="#1F2C3D"
            />
            <defs>
              <clipPath id="clip0_12537_16260">
                <rect width="31.3569" height="37.387" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={classes.middle}>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>MenyPunkt 1</li>
            <li className={classes.menuItem}>MenyPunkt 2</li>
            <li className={classes.menuItem}>MenyPunkt 3</li>
          </ul>
        </div>
        <div className={classes.right}>
          <Button className={classes.btn} variant="tertiary">
            <GlobeIcon title="a11y-title" />
            Språk
          </Button>
          <Button className={classes.btn} variant="tertiary">
            <MagnifyingGlassIcon title="a11y-title" />
            Søk
          </Button>
        </div>
      </div>
    </div>
  );
};
