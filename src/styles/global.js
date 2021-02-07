import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: #ffff;
    text-decoration: none;
  }

  .ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 44px;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #368aeb;
  stroke-width: 3.5px;
  stroke-linecap: round;
}
.ham5 .top {
  stroke-dasharray: 40 82;
}
.ham5 .bottom {
  stroke-dasharray: 40 82;
}
.ham5.active .top {
  stroke-dasharray: 14 82;
  stroke-dashoffset: -72px;
}
.ham5.active .bottom {
  stroke-dasharray: 14 82;
  stroke-dashoffset: -72px;
}

.pt-perspective {
  position: relative;
	width: 100%;
	height: 100%;
	perspective: 1200px;
	transform-style: preserve-3d;
}

.pt-page {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	visibility: hidden;
	overflow: hidden;
	backface-visibility: hidden;
	transform: translate3d(0, 0, 0);
}

.pt-page-current,
.no-js .pt-page {
	visibility: visible;
}

.no-js body {
	overflow: auto;
}

.pt-page-ontop {
	z-index: 999;
}

.pt-page-moveToLeft {
	-webkit-animation: moveToLeft .6s ease both;
	animation: moveToLeft .6s ease both;
}

.pt-page-moveFromLeft {
	-webkit-animation: moveFromLeft .6s ease both;
	animation: moveFromLeft .6s ease both;
}

.pt-page-moveToRight {
	-webkit-animation: moveToRight .6s ease both;
	animation: moveToRight .6s ease both;
}

.pt-page-moveFromRight {
	-webkit-animation: moveFromRight .6s ease both;
	animation: moveFromRight .6s ease both;
}

.pt-page-moveToTop {
	-webkit-animation: moveToTop .6s ease both;
	animation: moveToTop .6s ease both;
}

.pt-page-moveFromTop {
	-webkit-animation: moveFromTop .6s ease both;
	animation: moveFromTop .6s ease both;
}

.pt-page-moveToBottom {
	-webkit-animation: moveToBottom .6s ease both;
	animation: moveToBottom .6s ease both;
}

.pt-page-moveFromBottom {
	-webkit-animation: moveFromBottom .6s ease both;
	animation: moveFromBottom .6s ease both;
}

/* fade */

.pt-page-fade {
	-webkit-animation: fade .7s ease both;
	animation: fade .7s ease both;
}

/* move from / to and fade */

.pt-page-moveToLeftFade {
	-webkit-animation: moveToLeftFade .7s ease both;
	animation: moveToLeftFade .7s ease both;
}

.pt-page-moveFromLeftFade {
	-webkit-animation: moveFromLeftFade .7s ease both;
	animation: moveFromLeftFade .7s ease both;
}

.pt-page-moveToRightFade {
	-webkit-animation: moveToRightFade .7s ease both;
	animation: moveToRightFade .7s ease both;
}

.pt-page-moveFromRightFade {
	-webkit-animation: moveFromRightFade .7s ease both;
	animation: moveFromRightFade .7s ease both;
}

.pt-page-moveToTopFade {
	-webkit-animation: moveToTopFade .7s ease both;
	animation: moveToTopFade .7s ease both;
}

.pt-page-moveFromTopFade {
	-webkit-animation: moveFromTopFade .7s ease both;
	animation: moveFromTopFade .7s ease both;
}

.pt-page-moveToBottomFade {
	-webkit-animation: moveToBottomFade .7s ease both;
	animation: moveToBottomFade .7s ease both;
}

.pt-page-moveFromBottomFade {
	-webkit-animation: moveFromBottomFade .7s ease both;
	animation: moveFromBottomFade .7s ease both;
}

/* move to with different easing */

.pt-page-moveToLeftEasing {
	-webkit-animation: moveToLeft .7s ease-in-out both;
	animation: moveToLeft .7s ease-in-out both;
}
.pt-page-moveToRightEasing {
	-webkit-animation: moveToRight .7s ease-in-out both;
	animation: moveToRight .7s ease-in-out both;
}
.pt-page-moveToTopEasing {
	-webkit-animation: moveToTop .7s ease-in-out both;
	animation: moveToTop .7s ease-in-out both;
}
.pt-page-moveToBottomEasing {
	-webkit-animation: moveToBottom .7s ease-in-out both;
	animation: moveToBottom .7s ease-in-out both;
}

/********************************* keyframes **************************************/

/* move from / to  */

@-webkit-keyframes moveToLeft {
	from { }
	to { -webkit-transform: translateX(-100%); }
}
@keyframes moveToLeft {
	from { }
	to { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}

@-webkit-keyframes moveFromLeft {
	from { -webkit-transform: translateX(-100%); }
}
@keyframes moveFromLeft {
	from { -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}

@-webkit-keyframes moveToRight { 
	from { }
	to { -webkit-transform: translateX(100%); }
}
@keyframes moveToRight { 
	from { }
	to { -webkit-transform: translateX(100%); transform: translateX(100%); }
}

@-webkit-keyframes moveFromRight {
	from { -webkit-transform: translateX(100%); }
}
@keyframes moveFromRight {
	from { -webkit-transform: translateX(100%); transform: translateX(100%); }
}

@-webkit-keyframes moveToTop {
	from { }
	to { -webkit-transform: translateY(-100%); }
}
@keyframes moveToTop {
	from { }
	to { -webkit-transform: translateY(-100%); transform: translateY(-100%); }
}

@-webkit-keyframes moveFromTop {
	from { -webkit-transform: translateY(-100%); }
}
@keyframes moveFromTop {
	from { -webkit-transform: translateY(-100%); transform: translateY(-100%); }
}

@-webkit-keyframes moveToBottom {
	from { }
	to { -webkit-transform: translateY(100%); }
}
@keyframes moveToBottom {
	from { }
	to { -webkit-transform: translateY(100%); transform: translateY(100%); }
}

@-webkit-keyframes moveFromBottom {
	from { -webkit-transform: translateY(100%); }
}
@keyframes moveFromBottom {
	from { -webkit-transform: translateY(100%); transform: translateY(100%); }
}

/* fade */

@-webkit-keyframes fade {
	from { }
	to { opacity: 0.3; }
}
@keyframes fade {
	from { }
	to { opacity: 0.3; }
}

/* move from / to and fade */

@-webkit-keyframes moveToLeftFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateX(-100%); }
}
@keyframes moveToLeftFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}

@-webkit-keyframes moveFromLeftFade {
	from { opacity: 0.3; -webkit-transform: translateX(-100%); }
}
@keyframes moveFromLeftFade {
	from { opacity: 0.3; -webkit-transform: translateX(-100%); transform: translateX(-100%); }
}

@-webkit-keyframes moveToRightFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateX(100%); }
}
@keyframes moveToRightFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }
}

@-webkit-keyframes moveFromRightFade {
	from { opacity: 0.3; -webkit-transform: translateX(100%); }
}
@keyframes moveFromRightFade {
	from { opacity: 0.3; -webkit-transform: translateX(100%); transform: translateX(100%); }
}

@-webkit-keyframes moveToTopFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateY(-100%); }
}
@keyframes moveToTopFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }
}

@-webkit-keyframes moveFromTopFade {
	from { opacity: 0.3; -webkit-transform: translateY(-100%); }
}
@keyframes moveFromTopFade {
	from { opacity: 0.3; -webkit-transform: translateY(-100%); transform: translateY(-100%); }
}

@-webkit-keyframes moveToBottomFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateY(100%); }
}
@keyframes moveToBottomFade {
	from { }
	to { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }
}

@-webkit-keyframes moveFromBottomFade {
	from { opacity: 0.3; -webkit-transform: translateY(100%); }
}
@keyframes moveFromBottomFade {
	from { opacity: 0.3; -webkit-transform: translateY(100%); transform: translateY(100%); }
}

/* scale and fade */

.pt-page-scaleDown {
	-webkit-animation: scaleDown .7s ease both;
	animation: scaleDown .7s ease both;
}

.pt-page-scaleUp {
	-webkit-animation: scaleUp .7s ease both;
	animation: scaleUp .7s ease both;
}

.pt-page-scaleUpDown {
	-webkit-animation: scaleUpDown .5s ease both;
	animation: scaleUpDown .5s ease both;
}

.pt-page-scaleDownUp {
	-webkit-animation: scaleDownUp .5s ease both;
	animation: scaleDownUp .5s ease both;
}

.pt-page-scaleDownCenter {
	-webkit-animation: scaleDownCenter .4s ease-in both;
	animation: scaleDownCenter .4s ease-in both;
}

.pt-page-scaleUpCenter {
	-webkit-animation: scaleUpCenter .4s ease-out both;
	animation: scaleUpCenter .4s ease-out both;
}

/********************************* keyframes **************************************/

/* scale and fade */

@-webkit-keyframes scaleDown {
	from { }
	to { opacity: 0; -webkit-transform: scale(.8); }
}
@keyframes scaleDown {
	from { }
	to { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }
}

@-webkit-keyframes scaleUp {
	from { opacity: 0; -webkit-transform: scale(.8); }
}
@keyframes scaleUp {
	from { opacity: 0; -webkit-transform: scale(.8); transform: scale(.8); }
}

@-webkit-keyframes scaleUpDown {
	from { opacity: 0; -webkit-transform: scale(1.2); }
}
@keyframes scaleUpDown {
	from { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
}

@-webkit-keyframes scaleDownUp {
	from { }
	to { opacity: 0; -webkit-transform: scale(1.2); }
}
@keyframes scaleDownUp {
	from { }
	to { opacity: 0; -webkit-transform: scale(1.2); transform: scale(1.2); }
}

@-webkit-keyframes scaleDownCenter {
	from { }
	to { opacity: 0; -webkit-transform: scale(.7); }
}
@keyframes scaleDownCenter {
	from { }
	to { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
}

@-webkit-keyframes scaleUpCenter {
	from { opacity: 0; -webkit-transform: scale(.7); }
}
@keyframes scaleUpCenter {
	from { opacity: 0; -webkit-transform: scale(.7); transform: scale(.7); }
}

/* rotate sides first and scale */

.pt-page-rotateRightSideFirst {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateRightSideFirst .8s both ease-in;
	animation: rotateRightSideFirst .8s both ease-in;
}
.pt-page-rotateLeftSideFirst {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateLeftSideFirst .8s both ease-in;
	animation: rotateLeftSideFirst .8s both ease-in;
}
.pt-page-rotateTopSideFirst {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateTopSideFirst .8s both ease-in;
	animation: rotateTopSideFirst .8s both ease-in;
}
.pt-page-rotateBottomSideFirst {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateBottomSideFirst .8s both ease-in;
	animation: rotateBottomSideFirst .8s both ease-in;
}

/* flip */

.pt-page-flipOutRight {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipOutRight .5s both ease-in;
	animation: flipOutRight .5s both ease-in;
}
.pt-page-flipInLeft {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipInLeft .5s both ease-out;
	animation: flipInLeft .5s both ease-out;
}
.pt-page-flipOutLeft {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipOutLeft .5s both ease-in;
	animation: flipOutLeft .5s both ease-in;
}
.pt-page-flipInRight {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipInRight .5s both ease-out;
	animation: flipInRight .5s both ease-out;
}
.pt-page-flipOutTop {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipOutTop .5s both ease-in;
	animation: flipOutTop .5s both ease-in;
}
.pt-page-flipInBottom {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipInBottom .5s both ease-out;
	animation: flipInBottom .5s both ease-out;
}
.pt-page-flipOutBottom {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipOutBottom .5s both ease-in;
	animation: flipOutBottom .5s both ease-in;
}
.pt-page-flipInTop {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: flipInTop .5s both ease-out;
	animation: flipInTop .5s both ease-out;
}

/* rotate fall */

.pt-page-rotateFall {
	-webkit-transform-origin: 0% 0%;
	transform-origin: 0% 0%;
	-webkit-animation: rotateFall 1s both ease-in;
	animation: rotateFall 1s both ease-in;
}

/* rotate newspaper */
.pt-page-rotateOutNewspaper {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: rotateOutNewspaper .5s both ease-in;
	animation: rotateOutNewspaper .5s both ease-in;
}
.pt-page-rotateInNewspaper {
	-webkit-transform-origin: 50% 50%;
	transform-origin: 50% 50%;
	-webkit-animation: rotateInNewspaper .5s both ease-out;
	animation: rotateInNewspaper .5s both ease-out;
}

/* push */
.pt-page-rotatePushLeft {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotatePushLeft .8s both ease;
	animation: rotatePushLeft .8s both ease;
}
.pt-page-rotatePushRight {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotatePushRight .8s both ease;
	animation: rotatePushRight .8s both ease;
}
.pt-page-rotatePushTop {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotatePushTop .8s both ease;
	animation: rotatePushTop .8s both ease;
}
.pt-page-rotatePushBottom {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotatePushBottom .8s both ease;
	animation: rotatePushBottom .8s both ease;
}

/* pull */
.pt-page-rotatePullRight {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotatePullRight .5s both ease;
	animation: rotatePullRight .5s both ease;
}
.pt-page-rotatePullLeft {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotatePullLeft .5s both ease;
	animation: rotatePullLeft .5s both ease;
}
.pt-page-rotatePullTop {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotatePullTop .5s both ease;
	animation: rotatePullTop .5s both ease;
}
.pt-page-rotatePullBottom {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotatePullBottom .5s both ease;
	animation: rotatePullBottom .5s both ease;
}

/* fold */
.pt-page-rotateFoldRight {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateFoldRight .7s both ease;
	animation: rotateFoldRight .7s both ease;
}
.pt-page-rotateFoldLeft {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateFoldLeft .7s both ease;
	animation: rotateFoldLeft .7s both ease;
}
.pt-page-rotateFoldTop {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateFoldTop .7s both ease;
	animation: rotateFoldTop .7s both ease;
}
.pt-page-rotateFoldBottom {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateFoldBottom .7s both ease;
	animation: rotateFoldBottom .7s both ease;
}

/* unfold */
.pt-page-rotateUnfoldLeft {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateUnfoldLeft .7s both ease;
	animation: rotateUnfoldLeft .7s both ease;
}
.pt-page-rotateUnfoldRight {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateUnfoldRight .7s both ease;
	animation: rotateUnfoldRight .7s both ease;
}
.pt-page-rotateUnfoldTop {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateUnfoldTop .7s both ease;
	animation: rotateUnfoldTop .7s both ease;
}
.pt-page-rotateUnfoldBottom {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateUnfoldBottom .7s both ease;
	animation: rotateUnfoldBottom .7s both ease;
}

/* room walls */
.pt-page-rotateRoomLeftOut {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateRoomLeftOut .8s both ease;
	animation: rotateRoomLeftOut .8s both ease;
}
.pt-page-rotateRoomLeftIn {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateRoomLeftIn .8s both ease;
	animation: rotateRoomLeftIn .8s both ease;
}
.pt-page-rotateRoomRightOut {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateRoomRightOut .8s both ease;
	animation: rotateRoomRightOut .8s both ease;
}
.pt-page-rotateRoomRightIn {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateRoomRightIn .8s both ease;
	animation: rotateRoomRightIn .8s both ease;
}
.pt-page-rotateRoomTopOut {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateRoomTopOut .8s both ease;
	animation: rotateRoomTopOut .8s both ease;
}
.pt-page-rotateRoomTopIn {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateRoomTopIn .8s both ease;
	animation: rotateRoomTopIn .8s both ease;
}
.pt-page-rotateRoomBottomOut {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateRoomBottomOut .8s both ease;
	animation: rotateRoomBottomOut .8s both ease;
}
.pt-page-rotateRoomBottomIn {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateRoomBottomIn .8s both ease;
	animation: rotateRoomBottomIn .8s both ease;
}

/* cube */
.pt-page-rotateCubeLeftOut {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateCubeLeftOut .6s both ease-in;
	animation: rotateCubeLeftOut .6s both ease-in;
}
.pt-page-rotateCubeLeftIn {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateCubeLeftIn .6s both ease-in;
	animation: rotateCubeLeftIn .6s both ease-in;
}
.pt-page-rotateCubeRightOut {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateCubeRightOut .6s both ease-in;
	animation: rotateCubeRightOut .6s both ease-in;
}
.pt-page-rotateCubeRightIn {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateCubeRightIn .6s both ease-in;
	animation: rotateCubeRightIn .6s both ease-in;
}
.pt-page-rotateCubeTopOut {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateCubeTopOut .6s both ease-in;
	animation: rotateCubeTopOut .6s both ease-in;
}
.pt-page-rotateCubeTopIn {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateCubeTopIn .6s both ease-in;
	animation: rotateCubeTopIn .6s both ease-in;
}
.pt-page-rotateCubeBottomOut {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateCubeBottomOut .6s both ease-in;
	animation: rotateCubeBottomOut .6s both ease-in;
}
.pt-page-rotateCubeBottomIn {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateCubeBottomIn .6s both ease-in;
	animation: rotateCubeBottomIn .6s both ease-in;
}

/* carousel */
.pt-page-rotateCarouselLeftOut {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateCarouselLeftOut .8s both ease;
	animation: rotateCarouselLeftOut .8s both ease;
}
.pt-page-rotateCarouselLeftIn {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateCarouselLeftIn .8s both ease;
	animation: rotateCarouselLeftIn .8s both ease;
}
.pt-page-rotateCarouselRightOut {
	-webkit-transform-origin: 0% 50%;
	transform-origin: 0% 50%;
	-webkit-animation: rotateCarouselRightOut .8s both ease;
	animation: rotateCarouselRightOut .8s both ease;
}
.pt-page-rotateCarouselRightIn {
	-webkit-transform-origin: 100% 50%;
	transform-origin: 100% 50%;
	-webkit-animation: rotateCarouselRightIn .8s both ease;
	animation: rotateCarouselRightIn .8s both ease;
}
.pt-page-rotateCarouselTopOut {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateCarouselTopOut .8s both ease;
	animation: rotateCarouselTopOut .8s both ease;
}
.pt-page-rotateCarouselTopIn {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateCarouselTopIn .8s both ease;
	animation: rotateCarouselTopIn .8s both ease;
}
.pt-page-rotateCarouselBottomOut {
	-webkit-transform-origin: 50% 0%;
	transform-origin: 50% 0%;
	-webkit-animation: rotateCarouselBottomOut .8s both ease;
	animation: rotateCarouselBottomOut .8s both ease;
}
.pt-page-rotateCarouselBottomIn {
	-webkit-transform-origin: 50% 100%;
	transform-origin: 50% 100%;
	-webkit-animation: rotateCarouselBottomIn .8s both ease;
	animation: rotateCarouselBottomIn .8s both ease;
}

/* sides */
.pt-page-rotateSidesOut {
	-webkit-transform-origin: -50% 50%;
	transform-origin: -50% 50%;
	-webkit-animation: rotateSidesOut .5s both ease-in;
	animation: rotateSidesOut .5s both ease-in;
}
.pt-page-rotateSidesIn {
	-webkit-transform-origin: 150% 50%;
	transform-origin: 150% 50%;
	-webkit-animation: rotateSidesIn .5s both ease-out;
	animation: rotateSidesIn .5s both ease-out;
}

/* slide */
.pt-page-rotateSlideOut {
	-webkit-animation: rotateSlideOut 1s both ease;
	animation: rotateSlideOut 1s both ease;
}
.pt-page-rotateSlideIn {
	-webkit-animation: rotateSlideIn 1s both ease;
	animation: rotateSlideIn 1s both ease;
}

/********************************* keyframes **************************************/

/* rotate sides first and scale */

@-webkit-keyframes rotateRightSideFirst {
	0% { }
	40% { -webkit-transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes rotateRightSideFirst {
	0% { }
	40% { -webkit-transform: rotateY(15deg); transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes rotateLeftSideFirst {
	0% { }
	40% { -webkit-transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes rotateLeftSideFirst {
	0% { }
	40% { -webkit-transform: rotateY(-15deg); transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes rotateTopSideFirst {
	0% { }
	40% { -webkit-transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes rotateTopSideFirst {
	0% { }
	40% { -webkit-transform: rotateX(15deg); transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes rotateBottomSideFirst {
	0% { }
	40% { -webkit-transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes rotateBottomSideFirst {
	0% { }
	40% { -webkit-transform: rotateX(-15deg); transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); transform: scale(0.8) translateZ(-200px); opacity:0; }
}

/* flip */

@-webkit-keyframes flipOutRight {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@keyframes flipOutRight {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}

@-webkit-keyframes flipInLeft {
	from { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@keyframes flipInLeft {
	from { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}

@-webkit-keyframes flipOutLeft {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@keyframes flipOutLeft {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateY(-90deg); transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}

@-webkit-keyframes flipInRight {
	from { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@keyframes flipInRight {
	from { -webkit-transform: translateZ(-1000px) rotateY(90deg); transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}

@-webkit-keyframes flipOutTop {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@keyframes flipOutTop {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}

@-webkit-keyframes flipInBottom {
	from { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@keyframes flipInBottom {
	from { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}

@-webkit-keyframes flipOutBottom {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@keyframes flipOutBottom {
	from { }
	to { -webkit-transform: translateZ(-1000px) rotateX(-90deg); transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}

@-webkit-keyframes flipInTop {
	from { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@keyframes flipInTop {
	from { -webkit-transform: translateZ(-1000px) rotateX(90deg); transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}

/* fall */

@-webkit-keyframes rotateFall {
	0% { -webkit-transform: rotateZ(0deg); }
	20% { -webkit-transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; }
	40% { -webkit-transform: rotateZ(17deg); }
	60% { -webkit-transform: rotateZ(16deg); }
	100% { -webkit-transform: translateY(100%) rotateZ(17deg); }
}
@keyframes rotateFall {
	0% { -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg); }
	20% { -webkit-transform: rotateZ(10deg); transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
	40% { -webkit-transform: rotateZ(17deg); transform: rotateZ(17deg); }
	60% { -webkit-transform: rotateZ(16deg); transform: rotateZ(16deg); }
	100% { -webkit-transform: translateY(100%) rotateZ(17deg); transform: translateY(100%) rotateZ(17deg); }
}

/* newspaper */

@-webkit-keyframes rotateOutNewspaper {
	from { }
	to { -webkit-transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}
@keyframes rotateOutNewspaper {
	from { }
	to { -webkit-transform: translateZ(-3000px) rotateZ(360deg); transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}

@-webkit-keyframes rotateInNewspaper {
	from { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}
@keyframes rotateInNewspaper {
	from { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}

/* push */

@-webkit-keyframes rotatePushLeft {
	from { }
	to { opacity: 0; -webkit-transform: rotateY(90deg); }
}
@keyframes rotatePushLeft {
	from { }
	to { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }
}

@-webkit-keyframes rotatePushRight {
	from { }
	to { opacity: 0; -webkit-transform: rotateY(-90deg); }
}
@keyframes rotatePushRight {
	from { }
	to { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }
}

@-webkit-keyframes rotatePushTop {
	from { }
	to { opacity: 0; -webkit-transform: rotateX(-90deg); }
}
@keyframes rotatePushTop {
	from { }
	to { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }
}

@-webkit-keyframes rotatePushBottom {
	from { }
	to { opacity: 0; -webkit-transform: rotateX(90deg); }
}
@keyframes rotatePushBottom {
	from { }
	to { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }
}

/* pull */

@-webkit-keyframes rotatePullRight {
	from { opacity: 0; -webkit-transform: rotateY(-90deg); }
}
@keyframes rotatePullRight {
	from { opacity: 0; -webkit-transform: rotateY(-90deg); transform: rotateY(-90deg); }
}

@-webkit-keyframes rotatePullLeft {
	from { opacity: 0; -webkit-transform: rotateY(90deg); }
}
@keyframes rotatePullLeft {
	from { opacity: 0; -webkit-transform: rotateY(90deg); transform: rotateY(90deg); }
}

@-webkit-keyframes rotatePullTop {
	from { opacity: 0; -webkit-transform: rotateX(-90deg); }
}
@keyframes rotatePullTop {
	from { opacity: 0; -webkit-transform: rotateX(-90deg); transform: rotateX(-90deg); }
}

@-webkit-keyframes rotatePullBottom {
	from { opacity: 0; -webkit-transform: rotateX(90deg); }
}
@keyframes rotatePullBottom {
	from { opacity: 0; -webkit-transform: rotateX(90deg); transform: rotateX(90deg); }
}

/* fold */

@-webkit-keyframes rotateFoldRight {
	from { }
	to { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@keyframes rotateFoldRight {
	from { }
	to { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes rotateFoldLeft {
	from { }
	to { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes rotateFoldLeft {
	from { }
	to { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes rotateFoldTop {
	from { }
	to { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes rotateFoldTop {
	from { }
	to { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes rotateFoldBottom {
	from { }
	to { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes rotateFoldBottom {
	from { }
	to { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
}

/* unfold */

@-webkit-keyframes rotateUnfoldLeft {
	from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes rotateUnfoldLeft {
	from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes rotateUnfoldRight {
	from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@keyframes rotateUnfoldRight {
	from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes rotateUnfoldTop {
	from { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes rotateUnfoldTop {
	from { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes rotateUnfoldBottom {
	from { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes rotateUnfoldBottom {
	from { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
}

/* room walls */

@-webkit-keyframes rotateRoomLeftOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
}
@keyframes rotateRoomLeftOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }
}

@-webkit-keyframes rotateRoomLeftIn {
	from { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
}
@keyframes rotateRoomLeftIn {
	from { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }
}

@-webkit-keyframes rotateRoomRightOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
}
@keyframes rotateRoomRightOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); transform: translateX(100%) rotateY(-90deg); }
}

@-webkit-keyframes rotateRoomRightIn {
	from { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
}
@keyframes rotateRoomRightIn {
	from { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); transform: translateX(-100%) rotateY(90deg); }
}

@-webkit-keyframes rotateRoomTopOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
}
@keyframes rotateRoomTopOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }
}

@-webkit-keyframes rotateRoomTopIn {
	from { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
}
@keyframes rotateRoomTopIn {
	from { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }
}

@-webkit-keyframes rotateRoomBottomOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
}
@keyframes rotateRoomBottomOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); transform: translateY(100%) rotateX(90deg); }
}

@-webkit-keyframes rotateRoomBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
}
@keyframes rotateRoomBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); transform: translateY(-100%) rotateX(-90deg); }
}

/* cube */

@-webkit-keyframes rotateCubeLeftOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes rotateCubeLeftOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg);  transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes rotateCubeLeftIn {
	0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
	50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}
@keyframes rotateCubeLeftIn {
	0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg);  transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}

@-webkit-keyframes rotateCubeRightOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@keyframes rotateCubeRightOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes rotateCubeRightIn {
	0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}
@keyframes rotateCubeRightIn {
	0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); transform: translateX(-100%) rotateY(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}

@-webkit-keyframes rotateCubeTopOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes rotateCubeTopOut {
	0% {}
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes rotateCubeTopIn {
	0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}
@keyframes rotateCubeTopIn {
	0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}

@-webkit-keyframes rotateCubeBottomOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes rotateCubeBottomOut {
	0% { }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); transform: translateY(100%) rotateX(-90deg); }
}

@-webkit-keyframes rotateCubeBottomIn {
	0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}
@keyframes rotateCubeBottomIn {
	0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); transform: translateY(-100%) rotateX(90deg); }
	50% { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}

/* carousel */

@-webkit-keyframes rotateCarouselLeftOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}
@keyframes rotateCarouselLeftOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}

@-webkit-keyframes rotateCarouselLeftIn {
	from { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@keyframes rotateCarouselLeftIn {
	from { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }
}

@-webkit-keyframes rotateCarouselRightOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@keyframes rotateCarouselRightOut {
	from { }
	to { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); transform: translateX(200%) scale(.4) rotateY(65deg); }
}

@-webkit-keyframes rotateCarouselRightIn {
	from { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}
@keyframes rotateCarouselRightIn {
	from { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}

@-webkit-keyframes rotateCarouselTopOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@keyframes rotateCarouselTopOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }
}

@-webkit-keyframes rotateCarouselTopIn {
	from { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@keyframes rotateCarouselTopIn {
	from { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }
}

@-webkit-keyframes rotateCarouselBottomOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@keyframes rotateCarouselBottomOut {
	from { }
	to { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); transform: translateY(200%) scale(.4) rotateX(-65deg); }
}

@-webkit-keyframes rotateCarouselBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@keyframes rotateCarouselBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); transform: translateY(-200%) scale(.4) rotateX(65deg); }
}

/* sides */

@-webkit-keyframes rotateSidesOut {
	from { }
	to { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); }
}
@keyframes rotateSidesOut {
	from { }
	to { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); transform: translateZ(-500px) rotateY(90deg); }
}

@-webkit-keyframes rotateSidesIn {
	from { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); }
}
@keyframes rotateSidesIn {
	from { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); transform: translateZ(-500px) rotateY(-90deg); }
}

/* slide */

@-webkit-keyframes rotateSlideOut {
	0% { }
	25% { opacity: .5; -webkit-transform: translateZ(-500px); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
	100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
}
@keyframes rotateSlideOut {
	0% { }
	25% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }
	100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); transform: translateZ(-500px) translateX(-200%); }
}

@-webkit-keyframes rotateSlideIn {
	0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px); }
	100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }
}
@keyframes rotateSlideIn {
	0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); transform: translateZ(-500px) translateX(200%); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px); transform: translateZ(-500px); }
	100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
}

/* animation delay classes */

.pt-page-delay100 {
	-webkit-animation-delay: .1s;
	animation-delay: .1s;
}
.pt-page-delay180 {
	-webkit-animation-delay: .180s;
	animation-delay: .180s;
}
.pt-page-delay200 {
	-webkit-animation-delay: .2s;
	animation-delay: .2s;
}
.pt-page-delay300 {
	-webkit-animation-delay: .3s;
	animation-delay: .3s;
}
.pt-page-delay400 {
	-webkit-animation-delay: .4s;
	animation-delay: .4s;
}
.pt-page-delay500 {
	-webkit-animation-delay: .5s;
	animation-delay: .5s;
}
.pt-page-delay700 {
	-webkit-animation-delay: .7s;
	animation-delay: .7s;
}
.pt-page-delay1000 {
	-webkit-animation-delay: 1s;
	animation-delay: 1s;
}

.copyright {
	position: absolute;
  font-size: 15px;
  color: #afafaf;
  right: 12px;
  font-weight: 700;
  color: #afafaf;
}

`;
