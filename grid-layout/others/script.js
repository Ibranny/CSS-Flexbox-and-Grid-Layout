html, body {
  height: 100%;
  width: 100%;
   background-color: #fbfbfb;
  display: flex;
  place-items: center;
 
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-gap: 20px;
/*   grid-template-areas:
  "0 0 1"
  "2 3 3"
  "2 4 4"
    ; */
  width: 50%;
  margin: auto;
   min-height: 100vh;
/*   grid-template-columns:repeat(6, 200px);
  grid-template-rows:repeat(6, 100px);
  background-color: #fbfbfb;
  margin: 50px 20px 20px 20px; */
  
}
.container div {
  padding: 2em;
  text-align: center;
}

.item0 {
  background-color: #ee4887;
/*    grid-column: 2 / 5;
  grid-row: 1 / 3; */
  grid-area: 0;
/*   border: 1px solid; */
}
.item1 {
  background-color: #fde693;
/*   grid-column: 5 / 6;
  grid-row: 1 / 3;
grid-area: 1; */
}
.item2 {
  background-color: #60f74f;
/*   grid-column: 2 / 4;
  grid-row: 3 / 5; */
  grid-area: 2;
}
.item3 {
  background-color: #50adfa;
/*   grid-column: 4 / 6;
  grid-row: 3 / 4; */
  grid-area: 3;
}
.item4 {
  background-color: #4dacf2;
/*   grid-column: 4 / 6;
  grid-row: 4 / 5; */
  grid-area: 4;
}