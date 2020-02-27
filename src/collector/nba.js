const defs = require("./defs");

function scoreboardUrl(d) {
  return defs.NBA_URL + "/" + d + "/" + defs.SCOREBOARD;
} // scoreboardUrl

function isValidDate(d) {

  if(d.length !== defs.NBA_DATE_FORMAT.length) {
    return false;
  } else {

    /*var year  = d.substring(0,4);

    if(defs.SEASONS[year].regular.start > d) {

    }*/
    //var month = d.substring(4,6);
    //var day   = d.substring(6,8);

    return true;

  }

} // isValidDate

function getScoreboard(d) {

  if(isValidDate(d)) {

    /*var headers = new Headers({
      "Accept": "application/json",
      "Access-Control-Allow-Origin":       "*",
      "Origin": "https://data.nba.net/prod/v1/20180225/scoreboard.json"
    })*/

    fetch(scoreboardUrl(d), {mode: "no-cors"})
    .then((res) => res.json())
    .then(function(data) {
      console.log(data);
      //console.log(defs.SEASONS["1979"]);
    }).catch(function(err) {
      console.log(err);
    });

  }

};

/*
function getBoxscore(d, g) {
  console.log(d);
  console.log(g);
};*/

exports.getScoreboard = getScoreboard;