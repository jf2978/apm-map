import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function MapPin({ position }) {
  const classes = useStyles();
  const pinRef = useRef(null);

  // spring transition helper function
  const springTransition = (damping, stiffness, velocity) => ({
    type: "spring",
    damping: damping,
    stiffness: stiffness,
    velocity: velocity,
  });

  const containerVariants = {
    before: {},
    after: { transition: springTransition(10, 10, 2) },
  };

  const pinVariants = {
    before: {
      y: -200,
      rotate: -20,
      transition: springTransition(10, 500, 15),
    },
    after: {
      translateX: 0,
      translateY: 0,
      transition: springTransition(50, 700, 15),
    },
  };

  return (
    <motion.svg
      width="800"
      height="200"
      viewBox="0 0 8000 2000"
      initial="before"
      animate="after"
      variants={containerVariants}
    >
      <motion.g
        initial="before"
        animate="after"
        variants={pinVariants}
        transform="translate(-70 -123)"
      >
        <motion.path
          ref={pinRef}
          id="path0"
          d="M186.263 201.511 C 188.991 203.863,188.800 199.688,188.800 257.086 C 188.800 308.772,188.804 309.021,189.635 311.206 C 190.094 312.413,190.810 314.480,191.225 315.800 C 191.640 317.120,192.163 318.560,192.386 319.000 C 192.609 319.440,193.137 320.880,193.559 322.200 C 194.408 324.857,198.041 335.116,198.799 337.000 L 199.282 338.200 199.645 337.255 C 200.141 335.961,200.171 334.735,199.877 327.800 C 199.738 324.500,199.496 297.050,199.342 266.800 C 199.187 236.550,199.047 209.460,199.030 206.600 L 199.000 201.400 204.884 201.329 C 208.120 201.290,211.090 201.070,211.484 200.841 C 211.990 200.546,208.219 200.424,198.600 200.423 L 185.000 200.422 186.263 201.511 M203.300 323.085 C 202.602 324.584,202.676 325.155,203.428 324.082 C 203.773 323.589,203.998 322.921,203.928 322.598 C 203.846 322.220,203.622 322.393,203.300 323.085 M201.822 328.222 C 201.672 329.025,201.638 329.772,201.748 329.882 C 201.858 329.992,202.072 329.425,202.222 328.622 C 202.373 327.819,202.406 327.073,202.296 326.963 C 202.186 326.853,201.973 327.419,201.822 328.222 "
          stroke="none"
          fill="#b7b7b3"
          fillRule="evenodd"
        ></motion.path>
        <motion.path
          id="path1"
          d="M192.094 47.483 C 191.596 47.579,191.291 47.824,191.418 48.029 C 191.544 48.233,191.367 48.400,191.024 48.400 C 190.681 48.400,190.400 48.220,190.400 48.000 C 190.400 47.386,189.218 47.525,188.522 48.221 C 188.111 48.632,187.528 48.760,186.800 48.600 C 186.058 48.437,185.487 48.570,185.049 49.008 C 184.692 49.365,184.400 49.464,184.400 49.229 C 184.400 48.608,183.755 48.703,183.029 49.429 C 182.683 49.774,182.400 49.864,182.400 49.629 C 182.400 49.008,181.755 49.103,181.029 49.829 C 180.683 50.174,180.400 50.264,180.400 50.029 C 180.400 49.793,180.220 49.600,180.000 49.600 C 179.780 49.600,179.600 49.889,179.600 50.243 C 179.600 50.657,179.381 50.802,178.985 50.650 C 178.627 50.512,178.269 50.676,178.129 51.040 C 177.935 51.548,177.822 51.565,177.537 51.134 C 177.254 50.705,177.076 50.742,176.633 51.321 C 176.218 51.863,176.027 51.913,175.866 51.521 C 175.703 51.128,175.506 51.178,175.066 51.721 C 174.631 52.257,174.433 52.308,174.297 51.921 C 174.170 51.562,173.793 51.739,173.086 52.489 C 172.521 53.087,172.000 53.401,171.929 53.186 C 171.789 52.768,169.200 53.572,169.200 54.033 C 169.200 54.175,168.345 54.618,167.300 55.017 C 165.289 55.785,164.400 56.453,164.400 57.195 C 164.400 57.444,164.220 57.536,164.000 57.400 C 163.780 57.264,163.600 57.347,163.600 57.584 C 163.600 57.851,163.195 57.914,162.534 57.748 C 161.652 57.526,161.512 57.594,161.722 58.140 C 161.904 58.616,161.755 58.800,161.187 58.800 C 160.716 58.800,160.387 59.081,160.368 59.500 C 160.351 59.885,160.249 59.985,160.143 59.722 C 159.889 59.099,158.800 59.521,158.800 60.243 C 158.800 60.549,158.423 60.800,157.963 60.800 C 157.474 60.800,157.042 61.119,156.925 61.566 C 156.815 61.987,156.291 62.441,155.762 62.574 C 155.233 62.707,154.800 63.073,154.800 63.389 C 154.800 63.704,154.125 64.282,153.300 64.673 C 151.179 65.678,145.350 71.672,145.794 72.391 C 146.029 72.771,145.337 73.327,144.463 73.459 C 143.689 73.576,143.526 73.823,143.459 74.978 C 143.422 75.622,143.213 75.936,142.900 75.817 C 142.625 75.711,142.400 75.889,142.400 76.213 C 142.400 76.536,142.226 76.800,142.013 76.800 C 141.799 76.800,141.741 77.101,141.882 77.469 C 142.077 77.977,141.977 78.077,141.469 77.882 C 140.956 77.685,140.800 77.853,140.800 78.600 C 140.800 79.344,140.643 79.515,140.136 79.320 C 139.609 79.118,139.518 79.244,139.698 79.933 C 139.845 80.494,139.742 80.800,139.405 80.800 C 138.827 80.800,138.400 81.664,138.400 82.833 C 138.400 83.255,138.265 83.579,138.100 83.553 C 137.310 83.428,137.060 83.651,137.600 84.000 C 138.118 84.335,138.108 84.389,137.527 84.394 C 137.157 84.397,136.728 84.797,136.574 85.281 C 136.420 85.766,136.048 86.409,135.747 86.710 C 135.215 87.243,135.028 88.040,135.179 89.140 C 135.225 89.475,135.065 89.564,134.759 89.375 C 134.423 89.167,134.339 89.264,134.497 89.676 C 134.627 90.014,134.391 90.572,133.965 90.937 C 133.103 91.675,132.960 92.400,133.676 92.400 C 133.939 92.400,133.826 92.639,133.426 92.931 C 133.027 93.223,132.700 93.943,132.700 94.531 C 132.700 95.171,132.479 95.600,132.150 95.600 C 131.847 95.600,131.600 95.780,131.600 96.000 C 131.600 96.220,131.814 96.400,132.076 96.400 C 132.339 96.400,132.204 96.681,131.776 97.025 C 131.230 97.465,131.147 97.712,131.496 97.857 C 131.873 98.014,131.849 98.208,131.396 98.661 C 130.679 99.378,130.623 100.000,131.276 100.000 C 131.539 100.000,131.419 100.244,131.011 100.542 C 130.565 100.869,130.369 101.341,130.518 101.731 C 130.655 102.088,130.477 102.666,130.118 103.025 C 129.568 103.575,129.556 103.729,130.035 104.044 C 130.507 104.354,130.485 104.482,129.900 104.827 C 129.091 105.304,128.965 106.638,129.700 106.936 C 130.060 107.082,130.076 107.231,129.754 107.470 C 128.988 108.037,128.660 109.666,129.239 110.024 C 129.667 110.289,129.657 110.547,129.182 111.435 C 128.342 113.004,128.336 125.466,129.174 125.984 C 129.643 126.274,129.655 126.452,129.239 126.953 C 128.662 127.648,129.004 130.000,129.681 130.000 C 129.963 130.000,129.958 130.169,129.666 130.521 C 129.173 131.114,129.505 132.906,130.045 132.572 C 130.240 132.451,130.400 132.618,130.400 132.943 C 130.400 133.268,130.177 133.608,129.904 133.699 C 129.544 133.819,129.595 134.052,130.087 134.544 C 130.469 134.926,130.657 135.506,130.518 135.869 C 130.369 136.259,130.565 136.731,131.011 137.058 C 131.419 137.356,131.539 137.600,131.276 137.600 C 130.613 137.600,130.682 138.225,131.429 138.971 C 131.797 139.340,131.869 139.600,131.602 139.600 C 131.052 139.600,131.491 141.261,132.154 141.687 C 132.585 141.964,132.655 142.198,132.754 143.700 C 132.779 144.085,133.070 144.400,133.400 144.400 C 133.730 144.400,134.000 144.580,134.000 144.800 C 134.000 145.020,133.826 145.200,133.613 145.200 C 133.103 145.200,133.595 146.512,134.253 146.911 C 134.536 147.081,134.664 147.488,134.539 147.815 C 134.370 148.256,134.503 148.341,135.055 148.146 C 135.639 147.939,135.700 147.991,135.336 148.385 C 134.823 148.941,135.387 151.200,136.039 151.200 C 136.238 151.200,136.400 151.464,136.400 151.787 C 136.400 152.180,136.632 152.288,137.100 152.113 C 137.713 151.883,137.732 151.934,137.251 152.525 C 136.777 153.108,136.793 153.200,137.375 153.200 C 137.745 153.200,137.936 153.380,137.800 153.600 C 137.664 153.820,137.743 154.000,137.976 154.000 C 138.209 154.000,138.400 154.360,138.400 154.800 C 138.400 155.258,138.667 155.600,139.024 155.600 C 139.367 155.600,139.536 155.780,139.400 156.000 C 139.264 156.220,139.347 156.400,139.584 156.400 C 139.851 156.400,139.914 156.805,139.748 157.466 C 139.526 158.348,139.594 158.488,140.140 158.278 C 140.607 158.099,140.800 158.242,140.800 158.766 C 140.800 159.173,141.160 159.601,141.600 159.716 C 142.079 159.841,142.400 160.262,142.400 160.763 C 142.400 161.232,142.658 161.600,142.987 161.600 C 143.311 161.600,143.485 161.836,143.374 162.123 C 143.126 162.770,144.384 164.200,145.200 164.200 C 145.530 164.200,145.775 164.515,145.744 164.900 C 145.714 165.285,145.849 165.600,146.044 165.600 C 146.240 165.600,146.400 165.834,146.400 166.119 C 146.400 167.022,152.075 172.490,153.072 172.547 C 153.687 172.582,154.116 172.959,154.370 173.686 C 154.602 174.351,155.146 174.872,155.774 175.029 C 156.338 175.171,156.800 175.518,156.800 175.801 C 156.800 176.391,157.896 176.912,158.436 176.578 C 158.636 176.454,158.800 176.633,158.800 176.976 C 158.800 177.333,159.142 177.600,159.600 177.600 C 160.070 177.600,160.400 177.867,160.400 178.247 C 160.400 178.705,160.643 178.830,161.232 178.676 C 161.839 178.517,162.004 178.612,161.844 179.029 C 161.716 179.364,161.868 179.600,162.213 179.600 C 162.536 179.600,162.800 179.801,162.800 180.047 C 162.800 180.296,163.153 180.401,163.600 180.284 C 164.114 180.150,164.400 180.272,164.400 180.625 C 164.400 180.974,164.644 181.081,165.066 180.919 C 165.513 180.748,165.636 180.817,165.442 181.132 C 165.268 181.413,165.402 181.600,165.776 181.600 C 166.119 181.600,166.400 181.756,166.400 181.946 C 166.400 182.136,167.255 182.614,168.300 183.009 C 169.345 183.404,170.332 183.923,170.494 184.163 C 170.695 184.463,170.790 184.443,170.794 184.100 C 170.797 183.825,170.974 183.600,171.187 183.600 C 171.401 183.600,171.471 183.870,171.345 184.200 C 171.218 184.530,171.314 184.800,171.557 184.800 C 171.801 184.800,172.000 184.620,172.000 184.400 C 172.000 184.180,172.374 184.374,172.831 184.831 C 173.288 185.288,173.913 185.565,174.220 185.448 C 174.528 185.330,174.974 185.541,175.213 185.917 C 175.540 186.432,175.700 186.472,175.864 186.079 C 176.027 185.687,176.218 185.737,176.633 186.279 C 177.076 186.858,177.254 186.895,177.537 186.466 C 177.822 186.035,177.935 186.052,178.129 186.560 C 178.269 186.924,178.627 187.088,178.985 186.950 C 179.330 186.818,179.600 186.927,179.600 187.200 C 179.600 187.467,179.865 187.584,180.188 187.460 C 180.512 187.336,181.083 187.540,181.456 187.913 C 181.944 188.401,182.182 188.454,182.300 188.100 C 182.422 187.733,182.616 187.759,183.061 188.204 C 183.746 188.889,184.400 188.985,184.400 188.400 C 184.400 187.804,185.174 187.916,185.871 188.614 C 186.360 189.103,186.604 189.129,187.073 188.740 C 187.540 188.351,187.732 188.367,188.008 188.813 C 188.232 189.175,189.176 189.399,190.663 189.444 C 191.936 189.482,193.037 189.712,193.119 189.957 C 193.303 190.508,195.600 190.549,195.600 190.000 C 195.600 189.759,197.267 189.600,199.800 189.600 C 202.333 189.600,204.000 189.759,204.000 190.000 C 204.000 190.562,206.700 190.501,206.888 189.935 C 206.978 189.666,208.023 189.435,209.365 189.388 C 210.700 189.342,211.817 189.096,211.993 188.811 C 212.211 188.458,212.379 188.443,212.574 188.757 C 212.959 189.381,213.434 189.309,214.239 188.504 C 214.740 188.003,214.982 187.947,215.101 188.304 C 215.336 189.007,216.400 188.922,216.400 188.200 C 216.400 187.870,216.580 187.600,216.800 187.600 C 217.020 187.600,217.200 187.780,217.200 188.000 C 217.200 188.220,217.470 188.400,217.800 188.400 C 218.130 188.400,218.400 188.141,218.400 187.825 C 218.400 187.509,218.715 187.243,219.100 187.234 C 220.718 187.197,221.764 186.907,221.916 186.452 C 222.039 186.083,222.212 186.078,222.634 186.428 C 223.068 186.788,223.248 186.741,223.451 186.212 C 223.652 185.688,223.784 185.651,224.031 186.051 C 224.272 186.441,224.600 186.301,225.354 185.487 C 225.905 184.893,226.456 184.568,226.579 184.765 C 226.908 185.298,228.400 184.796,228.400 184.153 C 228.400 183.630,229.132 183.414,230.340 183.579 C 230.675 183.625,230.764 183.465,230.575 183.159 C 230.361 182.814,230.470 182.741,230.934 182.919 C 231.391 183.095,231.610 182.959,231.632 182.487 C 231.651 182.070,231.742 181.997,231.865 182.300 C 231.976 182.575,232.251 182.800,232.476 182.800 C 232.701 182.800,232.782 182.530,232.655 182.200 C 232.529 181.870,232.584 181.600,232.779 181.600 C 232.974 181.600,233.224 181.825,233.335 182.100 C 233.457 182.402,233.549 182.325,233.568 181.908 C 233.587 181.491,234.038 181.118,234.700 180.970 C 236.896 180.482,237.200 180.336,237.200 179.773 C 237.200 179.457,237.578 179.200,238.043 179.200 C 238.631 179.200,238.815 179.017,238.653 178.595 C 238.469 178.114,238.637 178.044,239.476 178.255 C 240.348 178.474,240.487 178.405,240.278 177.860 C 240.099 177.393,240.242 177.200,240.766 177.200 C 241.173 177.200,241.594 176.867,241.700 176.461 C 241.814 176.023,242.402 175.620,243.139 175.472 C 244.103 175.279,244.325 175.070,244.122 174.542 C 243.923 174.023,244.020 173.922,244.531 174.118 C 244.899 174.259,245.200 174.222,245.200 174.034 C 245.200 173.847,245.583 173.593,246.052 173.471 C 246.521 173.348,246.826 173.012,246.730 172.724 C 246.542 172.156,248.204 170.337,248.574 170.707 C 248.938 171.071,252.289 167.449,252.101 166.894 C 252.004 166.607,252.535 166.136,253.331 165.803 C 254.345 165.379,254.859 164.834,255.190 163.831 C 255.484 162.938,255.840 162.517,256.186 162.650 C 256.536 162.784,256.817 162.435,256.989 161.651 C 257.184 160.763,257.421 160.510,257.891 160.690 C 258.388 160.881,258.479 160.744,258.302 160.067 C 258.148 159.481,258.257 159.200,258.637 159.200 C 258.947 159.200,259.200 158.840,259.200 158.400 C 259.200 157.940,259.467 157.600,259.827 157.600 C 260.287 157.600,260.381 157.370,260.181 156.739 C 259.966 156.062,260.042 155.930,260.539 156.121 C 261.016 156.304,261.234 156.024,261.430 154.982 C 261.596 154.095,261.924 153.589,262.345 153.568 C 262.759 153.548,262.816 153.463,262.500 153.335 C 262.225 153.224,262.000 152.974,262.000 152.779 C 262.000 152.584,262.270 152.529,262.600 152.655 C 262.973 152.798,263.200 152.653,263.200 152.271 C 263.200 151.934,263.427 151.419,263.705 151.129 C 264.730 150.055,265.289 148.303,264.720 147.942 C 264.321 147.689,264.316 147.611,264.700 147.606 C 264.975 147.603,265.200 147.330,265.200 147.000 C 265.200 146.670,265.449 146.400,265.753 146.400 C 266.432 146.400,266.884 144.899,266.311 144.545 C 266.056 144.387,266.141 144.153,266.532 143.934 C 266.881 143.739,267.065 143.314,266.941 142.989 C 266.816 142.665,266.933 142.400,267.200 142.400 C 267.467 142.400,267.584 142.135,267.459 141.811 C 267.335 141.486,267.540 141.040,267.917 140.818 C 268.466 140.494,268.495 140.346,268.066 140.063 C 267.643 139.784,267.677 139.656,268.233 139.443 C 268.755 139.242,268.818 139.058,268.481 138.721 C 268.144 138.384,268.199 138.143,268.699 137.777 C 269.242 137.380,269.276 137.173,268.875 136.690 C 268.474 136.207,268.501 136.047,269.017 135.849 C 269.429 135.691,269.570 135.335,269.414 134.844 C 269.275 134.407,269.433 133.824,269.786 133.471 C 270.497 132.760,270.593 132.000,269.971 132.000 C 269.736 132.000,269.826 131.717,270.171 131.371 C 270.869 130.673,271.025 129.200,270.400 129.200 C 270.180 129.200,270.000 128.930,270.000 128.600 C 270.000 128.270,270.166 128.000,270.368 128.000 C 270.949 128.000,271.340 125.580,270.840 125.080 C 270.290 124.530,270.262 123.200,270.800 123.200 C 271.042 123.200,271.200 121.467,271.200 118.800 C 271.200 116.133,271.042 114.400,270.800 114.400 C 270.262 114.400,270.290 113.070,270.840 112.520 C 271.340 112.020,270.949 109.600,270.368 109.600 C 270.166 109.600,270.000 109.330,270.000 109.000 C 270.000 108.670,270.180 108.400,270.400 108.400 C 271.025 108.400,270.869 106.927,270.171 106.229 C 269.826 105.883,269.736 105.600,269.971 105.600 C 270.588 105.600,270.499 104.842,269.800 104.142 C 269.422 103.765,269.290 103.181,269.443 102.571 C 269.593 101.973,269.513 101.600,269.236 101.600 C 268.954 101.600,268.879 101.224,269.036 100.600 C 269.226 99.844,269.130 99.600,268.643 99.600 C 267.895 99.600,267.755 98.806,268.500 98.787 C 268.798 98.780,268.709 98.554,268.279 98.228 C 267.737 97.817,267.687 97.627,268.079 97.464 C 268.472 97.300,268.432 97.140,267.917 96.813 C 267.541 96.574,267.328 96.132,267.444 95.830 C 267.560 95.528,267.470 95.167,267.245 95.028 C 267.019 94.888,266.936 94.510,267.060 94.187 C 267.201 93.821,267.044 93.600,266.643 93.600 C 266.289 93.600,266.000 93.420,266.000 93.200 C 266.000 92.980,266.174 92.800,266.387 92.800 C 266.855 92.800,266.431 91.515,265.833 91.117 C 265.599 90.961,265.403 90.601,265.398 90.317 C 265.383 89.444,264.356 86.800,264.033 86.800 C 263.865 86.800,263.495 86.095,263.211 85.233 C 262.881 84.234,262.504 83.739,262.171 83.866 C 261.827 83.998,261.559 83.587,261.385 82.661 C 261.196 81.655,260.956 81.319,260.540 81.478 C 260.081 81.654,260.018 81.467,260.240 80.585 C 260.474 79.652,260.411 79.510,259.860 79.722 C 259.384 79.904,259.200 79.755,259.200 79.187 C 259.200 78.754,258.947 78.400,258.637 78.400 C 258.272 78.400,258.148 78.120,258.284 77.600 C 258.425 77.061,258.296 76.800,257.890 76.800 C 257.558 76.800,257.174 76.350,257.036 75.800 C 256.898 75.250,256.563 74.795,256.292 74.790 C 256.022 74.784,255.465 74.053,255.055 73.164 C 254.603 72.184,254.106 71.627,253.792 71.748 C 253.236 71.961,251.848 70.685,252.226 70.307 C 252.521 70.012,248.758 66.400,248.156 66.400 C 247.588 66.400,246.665 65.323,246.548 64.523 C 246.425 63.685,246.196 63.527,245.009 63.459 C 244.299 63.419,243.896 63.122,243.747 62.529 C 243.517 61.617,242.585 61.038,241.964 61.422 C 241.764 61.546,241.600 61.367,241.600 61.024 C 241.600 60.670,241.259 60.400,240.813 60.400 C 240.277 60.400,240.099 60.208,240.255 59.800 C 240.425 59.359,240.203 59.200,239.419 59.200 C 238.810 59.200,238.459 59.028,238.600 58.800 C 238.736 58.580,238.477 58.400,238.024 58.400 C 237.563 58.400,237.200 58.139,237.200 57.808 C 237.200 57.482,236.705 57.105,236.100 56.970 C 233.879 56.476,233.599 56.333,233.568 55.673 C 233.549 55.257,233.460 55.191,233.335 55.500 C 233.224 55.775,232.974 56.000,232.779 56.000 C 232.584 56.000,232.529 55.730,232.655 55.400 C 232.782 55.070,232.701 54.800,232.476 54.800 C 232.251 54.800,231.976 55.025,231.865 55.300 C 231.742 55.603,231.651 55.530,231.632 55.113 C 231.611 54.669,231.385 54.507,230.995 54.657 C 230.563 54.823,230.461 54.706,230.638 54.245 C 230.774 53.890,230.701 53.600,230.476 53.600 C 230.251 53.600,229.976 53.825,229.865 54.100 C 229.712 54.479,229.656 54.482,229.632 54.113 C 229.614 53.844,229.330 53.729,229.000 53.855 C 228.620 54.001,228.400 53.850,228.400 53.443 C 228.400 53.089,228.085 52.779,227.700 52.754 C 226.327 52.663,226.138 52.592,225.444 51.900 C 224.622 51.079,224.005 50.995,223.988 51.700 C 223.981 51.975,223.787 51.875,223.556 51.478 C 223.243 50.940,223.003 50.866,222.614 51.188 C 222.229 51.508,222.033 51.463,221.862 51.017 C 221.729 50.671,221.368 50.514,221.015 50.650 C 220.631 50.797,220.400 50.661,220.400 50.288 C 220.400 49.635,217.895 49.050,217.667 49.650 C 217.444 50.234,216.400 50.041,216.400 49.416 C 216.400 49.043,216.003 48.836,215.300 48.843 C 213.243 48.864,211.018 48.453,210.875 48.026 C 210.695 47.486,209.600 47.464,209.600 48.000 C 209.600 48.220,209.319 48.400,208.976 48.400 C 208.633 48.400,208.452 48.240,208.572 48.045 C 208.905 47.507,205.187 47.053,204.672 47.568 C 204.128 48.112,200.400 48.140,200.400 47.600 C 200.400 47.380,200.040 47.200,199.600 47.200 C 199.160 47.200,198.800 47.380,198.800 47.600 C 198.800 47.820,198.080 48.000,197.200 48.000 C 196.320 48.000,195.600 47.820,195.600 47.600 C 195.600 47.204,193.848 47.146,192.094 47.483 M209.600 59.224 C 210.590 59.451,212.300 59.817,213.400 60.036 C 218.376 61.029,231.037 66.345,231.533 67.649 C 231.607 67.842,231.858 68.000,232.093 68.000 C 232.993 68.000,239.956 73.672,243.208 77.055 C 249.953 84.072,256.071 94.578,257.618 101.800 C 257.901 103.120,258.262 104.380,258.420 104.600 C 259.852 106.588,260.334 124.958,259.086 130.000 C 258.732 131.430,258.066 134.124,257.605 135.986 C 257.145 137.849,256.621 139.469,256.442 139.586 C 256.263 139.704,255.891 140.520,255.615 141.400 C 255.114 143.001,250.954 151.223,250.454 151.600 C 250.308 151.710,249.472 152.859,248.595 154.152 C 242.602 162.993,229.952 172.365,219.800 175.484 C 218.700 175.822,217.619 176.242,217.397 176.418 C 217.176 176.593,215.466 177.024,213.597 177.377 C 211.729 177.729,209.300 178.208,208.200 178.441 C 200.342 180.107,183.344 177.688,175.421 173.777 C 174.333 173.240,173.208 172.800,172.921 172.800 C 172.635 172.800,172.400 172.640,172.400 172.443 C 172.400 172.247,171.725 171.792,170.900 171.432 C 169.520 170.830,167.945 169.871,164.950 167.808 C 154.923 160.902,145.100 147.292,142.426 136.600 C 142.151 135.500,141.775 134.240,141.592 133.800 C 139.763 129.423,139.318 113.386,140.836 106.600 C 143.896 92.923,152.274 79.233,162.200 71.688 C 162.860 71.186,164.100 70.241,164.955 69.588 C 165.810 68.935,166.652 68.400,166.826 68.400 C 167.000 68.400,167.391 68.152,167.695 67.848 C 168.769 66.774,175.376 63.564,180.033 61.853 C 188.174 58.863,202.486 57.590,209.600 59.224 M180.322 200.718 C 179.883 200.804,179.731 201.077,179.892 201.495 C 180.076 201.974,179.969 202.074,179.474 201.884 C 178.992 201.699,178.740 201.900,178.561 202.611 C 178.426 203.152,178.166 203.503,177.985 203.391 C 177.804 203.279,177.542 203.370,177.404 203.593 C 177.266 203.817,177.356 204.000,177.605 204.000 C 177.866 204.000,177.792 204.265,177.429 204.629 C 176.468 205.590,176.468 310.010,177.429 310.971 C 177.797 311.340,177.869 311.600,177.602 311.600 C 177.052 311.600,177.491 313.261,178.152 313.684 C 178.396 313.840,178.628 314.380,178.668 314.884 C 178.775 316.241,179.521 318.000,179.990 318.000 C 180.216 318.000,180.400 318.191,180.400 318.424 C 180.400 318.657,180.220 318.736,180.000 318.600 C 179.780 318.464,179.600 318.524,179.600 318.734 C 179.600 318.943,179.881 319.222,180.225 319.354 C 180.574 319.488,180.724 319.799,180.564 320.058 C 180.406 320.314,180.608 320.763,181.015 321.061 C 181.421 321.357,181.539 321.600,181.276 321.600 C 181.014 321.600,180.800 321.780,180.800 322.000 C 180.800 322.220,181.070 322.400,181.400 322.400 C 181.730 322.400,182.000 322.580,182.000 322.800 C 182.000 323.020,181.837 323.200,181.637 323.200 C 181.087 323.200,181.600 324.714,182.233 324.957 C 182.538 325.074,182.681 325.445,182.550 325.785 C 182.418 326.130,182.527 326.400,182.800 326.400 C 183.073 326.400,183.182 326.670,183.050 327.015 C 182.914 327.368,183.071 327.729,183.417 327.862 C 183.879 328.039,183.914 328.222,183.565 328.642 C 183.213 329.066,183.264 329.250,183.788 329.451 C 184.330 329.659,184.360 329.782,183.934 330.063 C 183.506 330.345,183.539 330.497,184.100 330.827 C 184.485 331.054,184.800 331.686,184.800 332.232 C 184.800 332.778,185.085 333.335,185.434 333.468 C 185.945 333.665,185.965 333.779,185.534 334.063 C 185.109 334.343,185.158 334.536,185.776 335.008 C 186.204 335.333,186.339 335.600,186.076 335.600 C 185.814 335.600,185.600 335.780,185.600 336.000 C 185.600 336.220,185.889 336.400,186.243 336.400 C 186.645 336.400,186.801 336.621,186.659 336.989 C 186.535 337.314,186.719 337.739,187.068 337.934 C 187.476 338.163,187.550 338.383,187.275 338.553 C 186.734 338.888,187.478 341.205,188.331 341.839 C 188.656 342.081,188.793 342.487,188.636 342.742 C 188.474 343.004,188.636 343.316,189.008 343.458 C 189.537 343.661,189.562 343.781,189.134 344.063 C 188.709 344.343,188.758 344.536,189.376 345.008 C 189.811 345.339,189.931 345.600,189.649 345.600 C 189.091 345.600,189.446 347.300,190.053 347.533 C 190.244 347.607,190.400 347.913,190.400 348.213 C 190.400 348.514,190.715 348.944,191.100 349.168 C 191.488 349.394,191.577 349.581,191.300 349.588 C 190.582 349.605,190.680 350.400,191.400 350.400 C 192.120 350.400,192.218 351.194,191.500 351.213 C 191.195 351.220,191.272 351.432,191.700 351.757 C 192.436 352.315,192.688 353.025,192.000 352.600 C 191.780 352.464,191.600 352.528,191.600 352.743 C 191.600 352.958,191.824 353.208,192.098 353.299 C 192.372 353.391,192.612 353.721,192.631 354.033 C 192.721 355.508,193.371 357.291,193.890 357.490 C 194.364 357.672,194.372 357.774,193.934 358.063 C 193.506 358.345,193.539 358.497,194.100 358.827 C 194.485 359.054,194.800 359.555,194.800 359.940 C 194.800 360.907,195.585 361.600,196.680 361.600 C 197.231 361.600,197.600 361.841,197.600 362.200 C 197.600 362.530,197.780 362.800,198.000 362.800 C 198.220 362.800,198.400 362.620,198.400 362.400 C 198.400 361.870,200.281 361.884,200.610 362.416 C 200.931 362.935,202.490 362.484,202.920 361.748 C 203.096 361.446,203.522 361.200,203.867 361.200 C 204.296 361.200,204.428 360.949,204.284 360.400 C 204.150 359.886,204.272 359.600,204.625 359.600 C 204.949 359.600,205.081 359.354,204.945 359.000 C 204.818 358.670,204.933 358.400,205.200 358.400 C 205.467 358.400,205.584 358.135,205.459 357.811 C 205.335 357.486,205.540 357.040,205.917 356.818 C 206.466 356.494,206.495 356.346,206.066 356.063 C 205.643 355.784,205.677 355.656,206.233 355.443 C 206.744 355.247,206.814 355.054,206.493 354.733 C 206.171 354.411,206.211 354.132,206.640 353.703 C 207.063 353.279,207.109 352.973,206.804 352.604 C 206.495 352.232,206.543 352.031,206.983 351.862 C 207.329 351.729,207.486 351.368,207.350 351.015 C 207.198 350.619,207.343 350.400,207.757 350.400 C 208.111 350.400,208.400 350.220,208.400 350.000 C 208.400 349.780,208.207 349.600,207.971 349.600 C 207.736 349.600,207.826 349.317,208.171 348.971 C 208.918 348.225,208.987 347.600,208.324 347.600 C 208.061 347.600,208.196 347.333,208.624 347.008 C 209.242 346.536,209.291 346.343,208.866 346.063 C 208.438 345.781,208.463 345.661,208.992 345.458 C 209.364 345.316,209.526 345.004,209.364 344.742 C 209.207 344.487,209.346 344.081,209.675 343.839 C 210.339 343.350,210.885 341.200,210.345 341.200 C 210.155 341.200,210.000 341.020,210.000 340.800 C 210.000 340.580,210.289 340.400,210.643 340.400 C 211.044 340.400,211.201 340.179,211.060 339.813 C 210.936 339.490,211.019 339.112,211.245 338.972 C 211.470 338.833,211.560 338.472,211.444 338.171 C 211.329 337.870,211.526 337.332,211.882 336.975 C 212.380 336.477,212.415 336.256,212.031 336.019 C 211.660 335.790,211.707 335.645,212.212 335.451 C 212.736 335.250,212.787 335.066,212.435 334.642 C 212.086 334.222,212.121 334.039,212.583 333.862 C 212.929 333.729,213.086 333.368,212.950 333.015 C 212.818 332.670,212.927 332.400,213.201 332.400 C 213.519 332.400,213.600 332.056,213.436 331.400 C 213.251 330.662,213.344 330.400,213.792 330.400 C 214.127 330.400,214.400 330.220,214.400 330.000 C 214.400 329.780,214.186 329.600,213.924 329.600 C 213.661 329.600,213.796 329.333,214.224 329.008 C 214.842 328.536,214.891 328.343,214.466 328.063 C 214.042 327.784,214.077 327.656,214.633 327.443 C 215.144 327.247,215.214 327.054,214.893 326.733 C 214.571 326.411,214.608 326.135,215.029 325.713 C 215.347 325.396,215.488 324.943,215.343 324.707 C 215.197 324.471,215.410 324.036,215.815 323.739 C 216.221 323.443,216.339 323.200,216.076 323.200 C 215.814 323.200,215.600 323.020,215.600 322.800 C 215.600 322.580,215.870 322.400,216.200 322.400 C 216.530 322.400,216.800 322.220,216.800 322.000 C 216.800 321.780,216.586 321.600,216.324 321.600 C 216.061 321.600,216.181 321.356,216.589 321.058 C 217.034 320.732,217.231 320.259,217.082 319.871 C 216.946 319.516,217.019 319.112,217.245 318.972 C 217.470 318.833,217.555 318.460,217.434 318.144 C 217.313 317.828,217.480 317.467,217.807 317.342 C 218.133 317.217,218.400 316.943,218.400 316.734 C 218.400 316.524,218.220 316.464,218.000 316.600 C 217.357 316.997,217.540 316.332,218.208 315.843 C 218.543 315.599,218.842 314.724,218.873 313.899 C 218.904 313.075,219.078 312.400,219.259 312.400 C 219.441 312.400,219.593 287.920,219.597 258.000 C 219.602 226.093,219.457 203.600,219.246 203.600 C 219.048 203.600,218.770 203.134,218.627 202.564 C 218.453 201.872,218.172 201.602,217.783 201.751 C 217.435 201.885,217.200 201.738,217.200 201.387 C 217.200 200.750,217.149 200.738,214.216 200.656 C 212.447 200.606,212.057 200.761,210.616 202.086 L 209.000 203.571 208.904 256.286 C 208.843 289.345,208.663 309.298,208.419 309.800 C 208.206 310.240,207.737 311.680,207.379 313.000 C 207.020 314.320,206.409 316.390,206.021 317.600 C 204.397 322.662,203.653 325.111,203.163 327.000 C 202.878 328.100,202.410 329.450,202.124 330.000 C 201.839 330.550,201.604 331.304,201.602 331.675 C 201.599 332.757,199.552 338.800,199.190 338.800 C 199.009 338.800,198.590 337.945,198.259 336.900 C 197.136 333.348,194.024 324.603,193.667 323.995 C 193.472 323.663,193.000 322.313,192.618 320.995 C 192.237 319.678,191.783 318.420,191.610 318.200 C 191.438 317.980,190.995 316.720,190.626 315.400 C 190.257 314.080,189.651 312.370,189.278 311.600 C 188.654 310.312,188.584 305.943,188.400 257.141 L 188.200 204.081 186.400 202.341 C 184.599 200.599,183.057 200.187,180.322 200.718 "
          stroke="none"
          fill="#040404"
          fillRule="evenodd"
        ></motion.path>
        <motion.path
          id="path2"
          d="M197.600 58.834 C 196.021 59.003,196.699 59.079,200.000 59.103 C 204.658 59.137,205.454 58.973,201.800 58.731 C 200.700 58.659,198.810 58.705,197.600 58.834 M185.800 60.285 C 185.360 60.391,184.835 60.634,184.634 60.825 C 184.328 61.115,186.420 60.708,187.800 60.208 C 188.385 59.996,186.738 60.060,185.800 60.285 M212.200 60.242 C 215.196 61.051,215.700 61.140,215.366 60.806 C 215.165 60.605,214.190 60.348,213.200 60.234 C 212.210 60.120,211.760 60.124,212.200 60.242 M220.497 62.730 C 222.011 63.408,224.988 68.552,226.381 72.900 C 226.646 73.725,226.989 74.400,227.144 74.400 C 227.299 74.400,227.670 75.255,227.968 76.300 C 228.267 77.345,228.829 78.920,229.216 79.800 C 229.604 80.680,230.137 82.210,230.400 83.200 C 230.663 84.190,231.012 85.180,231.177 85.400 C 231.341 85.620,231.782 86.970,232.158 88.400 C 232.533 89.830,233.002 91.360,233.201 91.800 C 233.399 92.240,233.859 94.130,234.224 96.000 C 234.588 97.870,235.002 99.580,235.143 99.800 C 236.353 101.684,237.219 121.071,236.423 128.472 C 235.734 134.883,235.612 135.700,235.209 136.600 C 235.011 137.040,234.560 138.902,234.205 140.737 C 233.851 142.572,233.403 144.372,233.211 144.737 C 233.019 145.102,232.558 146.570,232.188 148.000 C 231.817 149.430,231.381 150.780,231.219 151.000 C 231.057 151.220,230.692 152.300,230.408 153.400 C 230.124 154.500,229.674 155.760,229.407 156.200 C 229.141 156.640,228.599 157.990,228.202 159.200 C 227.806 160.410,227.363 161.490,227.218 161.600 C 227.073 161.710,226.715 162.430,226.422 163.200 C 225.520 165.572,221.536 173.392,221.157 173.533 C 220.961 173.607,220.800 173.941,220.800 174.276 C 220.800 174.698,221.015 174.798,221.500 174.601 C 221.885 174.445,222.650 174.172,223.200 173.994 C 224.114 173.699,227.953 171.761,230.400 170.359 C 232.185 169.337,233.767 168.256,235.441 166.914 C 236.344 166.192,237.180 165.600,237.299 165.600 C 237.873 165.600,242.352 161.047,242.131 160.688 C 241.991 160.462,242.057 160.388,242.279 160.525 C 242.690 160.779,244.599 158.775,247.811 154.716 C 249.746 152.270,252.921 146.942,254.197 144.000 C 254.627 143.010,255.084 142.110,255.214 142.000 C 255.344 141.890,255.783 140.720,256.189 139.400 C 256.596 138.080,257.074 136.730,257.252 136.400 C 257.429 136.070,257.954 133.910,258.418 131.600 C 262.079 113.368,258.729 98.181,247.566 82.400 C 245.721 79.791,243.121 77.205,242.627 77.486 C 242.392 77.619,242.337 77.578,242.504 77.394 C 242.906 76.950,241.199 75.153,240.680 75.474 C 240.458 75.611,240.388 75.543,240.524 75.323 C 241.338 74.006,229.935 66.304,222.709 63.289 C 219.532 61.964,217.821 61.531,220.497 62.730 M157.566 76.300 C 155.908 78.005,154.301 79.760,153.995 80.200 C 153.347 81.132,153.245 81.231,157.588 76.700 C 159.432 74.775,160.861 73.200,160.762 73.200 C 160.662 73.200,159.224 74.595,157.566 76.300 M140.647 108.500 C 140.512 108.995,140.322 111.290,140.226 113.600 C 140.053 117.754,140.055 117.763,140.366 114.400 C 140.539 112.530,140.813 110.235,140.976 109.300 C 141.286 107.508,141.066 106.970,140.647 108.500 M140.222 124.132 C 140.318 126.515,140.585 128.765,140.816 129.132 C 141.135 129.641,141.173 129.477,140.974 128.449 C 140.831 127.705,140.564 125.455,140.381 123.449 L 140.047 119.800 140.222 124.132 M142.204 135.188 C 142.320 135.951,142.597 136.757,142.818 136.978 C 143.090 137.250,143.097 136.991,142.842 136.191 C 142.158 134.045,141.989 133.779,142.204 135.188 M144.000 140.924 C 144.000 141.211,144.268 141.796,144.595 142.224 C 145.138 142.934,145.152 142.889,144.755 141.700 C 144.303 140.343,144.000 140.032,144.000 140.924 M148.000 149.138 C 148.000 149.324,148.388 149.819,148.862 150.238 L 149.724 151.000 149.016 149.900 C 148.286 148.766,148.000 148.551,148.000 149.138 M154.237 157.800 C 154.597 158.350,155.050 158.800,155.243 158.800 C 155.437 158.800,155.203 158.350,154.725 157.800 C 154.247 157.250,153.794 156.800,153.719 156.800 C 153.643 156.800,153.876 157.250,154.237 157.800 M186.741 177.301 C 186.943 177.503,187.533 177.601,188.054 177.519 C 188.855 177.393,188.798 177.337,187.687 177.152 C 186.893 177.021,186.519 177.079,186.741 177.301 M212.000 177.200 C 211.176 177.464,211.141 177.526,211.800 177.554 C 212.240 177.573,212.870 177.413,213.200 177.200 C 213.901 176.747,213.414 176.747,212.000 177.200 "
          stroke="none"
          fill="#d42c24"
          fillRule="evenodd"
        ></motion.path>
        <motion.path
          id="path3"
          d="M191.800 59.449 C 140.574 67.024,121.818 132.797,161.800 164.654 C 163.560 166.056,165.265 167.428,165.590 167.702 C 166.264 168.271,169.709 170.356,171.200 171.097 C 171.750 171.370,172.470 171.765,172.800 171.973 C 173.537 172.438,177.047 173.981,180.000 175.138 C 187.782 178.189,204.156 179.431,211.200 177.504 C 212.410 177.174,214.390 176.682,215.600 176.411 C 218.498 175.763,220.800 174.765,220.800 174.156 C 220.800 173.887,220.961 173.607,221.157 173.533 C 221.536 173.392,225.520 165.572,226.422 163.200 C 226.715 162.430,227.073 161.710,227.218 161.600 C 227.363 161.490,227.806 160.410,228.202 159.200 C 228.599 157.990,229.141 156.640,229.407 156.200 C 229.674 155.760,230.124 154.500,230.408 153.400 C 230.692 152.300,231.057 151.220,231.219 151.000 C 231.381 150.780,231.817 149.430,232.188 148.000 C 232.558 146.570,233.019 145.102,233.211 144.737 C 233.403 144.372,233.851 142.572,234.205 140.737 C 234.560 138.902,235.011 137.040,235.209 136.600 C 237.178 132.209,237.125 102.886,235.143 99.800 C 235.002 99.580,234.588 97.870,234.224 96.000 C 233.859 94.130,233.399 92.240,233.201 91.800 C 233.002 91.360,232.533 89.830,232.158 88.400 C 231.782 86.970,231.341 85.620,231.177 85.400 C 231.012 85.180,230.663 84.190,230.400 83.200 C 230.137 82.210,229.604 80.680,229.216 79.800 C 228.829 78.920,228.267 77.345,227.968 76.300 C 227.670 75.255,227.299 74.400,227.144 74.400 C 226.989 74.400,226.645 73.725,226.380 72.900 C 224.680 67.612,222.023 63.356,219.883 62.492 C 213.647 59.973,198.994 58.385,191.800 59.449 "
          stroke="none"
          fill="#ec5c44"
          fillRule="evenodd"
        ></motion.path>
        <motion.path
          id="path7"
          d=""
          stroke="none"
          fill="#f03044"
          fillRule="evenodd"
        ></motion.path>
        <motion.path
          id="path8"
          d=""
          stroke="none"
          fill="#f03044"
          fillRule="evenodd"
        ></motion.path>
      </motion.g>
    </motion.svg>
  );
}