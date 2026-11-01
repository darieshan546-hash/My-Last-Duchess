(function(){
"use strict";
var summary=[
["The setting","A <mark>Duke</mark> is showing a visitor a portrait of his <mark>late wife</mark> hanging on the wall. Only the Duke draws the curtain that covers it, so he controls who sees her."],
["The painting","The portrait is by <mark>Fra Pandolf</mark>, who worked on it for a single day. The Duke calls it “a wonder” and says it looks alive. He named the painter on purpose, to start the conversation."],
["The look in her eyes","Visitors often ask how such a glance of joy and passion got there. The Duke says it was not only her husband’s presence that brought the blush to her cheek. A remark from the painter about her mantle or the flush on her throat could do it too."],
["His complaint","He says she had a heart “too soon made glad” and “too easily impressed”. She liked everything she looked at: his gift at her breast, the sunset, a bough of cherries, her white mule. All of it drew the same blush and praise."],
["Wounded pride","What hurt him most was that she thanked men as if his <mark>nine-hundred-years-old name</mark> was no more than anybody’s gift. He felt she did not rank him above others."],
["Refusing to “stoop”","He says it would have meant stooping to tell her what displeased him, and he “chooses never to stoop”. He would not explain or ask her to change. He saw that as beneath him."],
["The chilling turn","“This grew; I gave commands; / Then all smiles stopped together.” The poem never says what the commands were. The reader is left to conclude that he had her silenced, which is why the ending is so disturbing."],
["Back to business","He leads the visitor down to meet the company. He talks of the <mark>dowry</mark> from the <mark>Count</mark>, the visitor’s master, while saying the Count’s daughter herself is his real object. Last, he points out a bronze of Neptune taming a sea-horse, cast for him by <mark>Claus of Innsbruck</mark>."]
];
var lines=[
["That’s my last Duchess painted on the wall, / Looking as if she were alive.","Opens the poem. The Duke talks of his dead wife as a possession on display. “Last” hints there may be a next wife."],
["Will ’t please you sit and look at her?","He invites the visitor to sit, as a host showing off an artwork. It also shows he is in control of the whole scene."],
["I said “Fra Pandolf” by design","He mentioned the painter deliberately. The Duke plans what he says and likes to show off."],
["She had / A heart—how shall I say? too soon made glad","He pauses to choose his words. He treats her cheerfulness as a fault."],
["as if she ranked / My gift of a nine-hundred-years-old name / With anybody’s gift","His central grievance: pride in his ancient family. He wanted special treatment, not equal thanks."],
["E’en then would be some stooping; and I choose / Never to stoop.","He refuses to talk with his wife about what upset him. His pride and silence caused the tragedy."],
["I gave commands; / Then all smiles stopped together.","The most chilling lines. They suggest he ordered her death, without saying so openly."],
["Notice Neptune, though, / Taming a sea-horse","He moves on to a bronze statue. Neptune taming a sea-horse mirrors the Duke’s wish to tame and control, and shows he values art as a symbol of ownership."]
];
var people=[
["The Duke","The speaker. Proud, jealous, controlling and cold. He is negotiating a new marriage."],
["The last Duchess","His dead wife, seen only through his words. Warm, cheerful, and gracious to everyone."],
["The envoy","The silent listener. He is the servant of the Count and has come to arrange the marriage."],
["The Count","The envoy’s master, known for his generosity. The Duke hopes to marry his daughter."],
["Fra Pandolf","The painter of the Duchess’s portrait, who finished it in a day."],
["Claus of Innsbruck","The sculptor who cast the Neptune bronze for the Duke."]
];
var vocab=[
["countenance","face","Her face and expression in the portrait."],
["durst","dared","The visitors would ask “if they durst”: if they dared."],
["officious","too eager to help","The fool who broke the cherry bough in the orchard for her."],
["mantle","cloak","The Duchess’s cloak, which Fra Pandolf said laps over her wrist."],
["pretence","claim","His just claim to a dowry."],
["munificence","great generosity","The Count’s well-known generosity is the Duke’s guarantee."],
["dowry","money given with a bride","The Duke expects a large dowry from the Count."],
["forsooth","indeed (mocking)","The Duke’s sarcastic comment on her making excuses."],
["lessoned","taught or corrected","If she let herself be lessoned, he would be stooping."],
["avowed","declared openly","He claims he said at the start that the daughter herself is his object."],
["stoop","lower himself","To explain his displeasure would mean lowering himself."],
["warrant","guarantee","The Count’s generosity is “ample warrant”."]
];
var shortQ=[
["Who is the speaker of the poem?","The Duke, who is talking to the envoy of a Count."],
["Who painted the Duchess’s portrait?","Fra Pandolf, in a day."],
["Why does the Duke keep the portrait behind a curtain?","So that only he decides who sees it, which shows his control."],
["What was the Duke’s main complaint?","She was too easily pleased and thanked everyone alike. She did not value his old name above others’ gifts."],
["Why does the Duke say he never stoops?","He thinks that explaining his displeasure to his wife would lower his dignity."],
["What is the final object the Duke shows?","A bronze of Neptune taming a sea-horse, cast by Claus of Innsbruck."]
];
var longQ=[
["Describe the Duke’s character as revealed in the poem.","Use his pride in his name, jealousy, need for control, refusal to “stoop”, cold way of speaking about his wife, and the hint that he “gave commands”."],
["How does the poet show the Duchess’s nature without letting her speak?","Through the Duke’s complaints: her blush, her smile for every person, her love of simple things (sunset, cherries, mule), and her gratitude."],
["What do the closing lines about Neptune suggest?","The Duke prizes art and people as things to own and tame. He turns from his dead wife to a bronze statue and to a marriage deal without any sign of regret."],
["“This grew; I gave commands; Then all smiles stopped together.” Explain.","Discuss the unstated meaning. The Duke’s jealousy grew, he gave orders, and her smiles ended, suggesting she was killed. The poem leaves this to the reader."]
];
var exam=[
["The portrait is a symbol of the Duke’s power. Discuss.","He controls the curtain, the viewers and the story. The painting has become the perfect Duchess: she “stands as if alive” but can no longer smile at anyone else."],
["How is the poem’s ending ironic?","He speaks of the dowry and then says the daughter is his “object”. He shows no lesson learned. The listener is left to fear for the next Duchess."]
];
var rev=[
"Title: <mark>My Last Duchess</mark>. Poet: <mark>Robert Browning</mark> (the uploaded file gives the poem text only).",
"Speaker: the Duke. Listener: the Count’s envoy, who never speaks in the text.",
"Setting: the Duke’s house, in front of the curtained portrait, before they go down to meet the company.",
"Theme: pride, jealousy, possessiveness and abuse of power.",
"Portrait by Fra Pandolf (one day’s work). Bronze Neptune by Claus of Innsbruck.",
"Duchess: too easily pleased, in the Duke’s eyes. She smiled at everyone.",
"Key phrases: “nine-hundred-years-old name”, “I choose never to stoop”, “I gave commands”.",
"Form: one long speech by one speaker, in rhyming couplets (seen in the text). It is usually called a dramatic monologue."
];
var $=function(s,r){return (r||document).querySelector(s)};
var screen=$("#screen"),phone=$("#phone");
function card(n,t,html){return '<div class="card"><button aria-expanded="false">'+(n?'<span class="n">'+n+'</span>':'')+'<span>'+t+'</span><span class="ch">▾</span></button><div class="body">'+html+'</div></div>'}
function qlist(a){return a.map(function(x,i){return card(i+1,x[0],'<p>'+x[1]+'</p>')}).join("")}
var h='';
h+='<section class="sec" id="summary"><h2>Summary</h2><p class="sub">Tap a point to open it.</p>'+summary.map(function(s,i){return card(i+1,s[0],'<p>'+s[1]+'</p>')}).join("")+'</section>';
h+='<section class="sec" id="theme"><h2>Main Theme</h2><div class="theme-box"><p>The poem shows how <mark>pride and the need for control</mark> can destroy love. The Duke cannot accept a wife who is kind to everyone. His story reveals a cruel, possessive man while he thinks he is praising his taste and rank.</p></div><div class="theme-box"><p>Other ideas: <mark>jealousy</mark>, <mark>power over others</mark>, and <mark>art as ownership</mark> (the portrait and the Neptune statue).</p></div></section>';
h+='<section class="sec" id="people"><h2>Characters</h2><div class="people">'+people.map(function(p,i){return '<div class="person'+(i===0?' wide':'')+'"><h3>'+p[0]+'</h3><p>'+p[1]+'</p></div>'}).join("")+'</div></section>';
h+='<section class="sec" id="vocab"><h2>Vocabulary</h2><p class="sub">Tap a card to flip it.</p><div class="vocab">'+vocab.map(function(v){return '<button class="flip"><span class="face front">'+v[0]+'<small>'+v[1]+'</small></span><span class="face back"><b>In the poem:</b>'+v[2]+'</span></button>'}).join("")+'</div></section>';
h+='<section class="sec" id="lines"><h2>Important Lines</h2><p class="sub">Tap a line for its meaning.</p>'+lines.map(function(l,i){return card(i+1,l[0].split(" / ")[0],'<q>'+l[0].replace(" / ","<br>")+'</q><p>'+l[1]+'</p>')}).join("")+'</section>';
h+='<section class="sec" id="questions"><h2>Important Questions</h2><div class="tabs"><button class="on" data-g="0">Short</button><button data-g="1">Long</button><button data-g="2">Exam</button></div><div class="qgroup on">'+qlist(shortQ)+'</div><div class="qgroup">'+qlist(longQ)+'</div><div class="qgroup">'+qlist(exam)+'</div><p class="note">Answers are pointers based on the poem text; write them in your own words.</p></section>';
h+='<section class="sec" id="revision"><h2>Quick Revision</h2><ul class="rev">'+rev.map(function(r){return '<li>'+r+'</li>'}).join("")+'</ul><div class="minute"><h3>One-minute revision</h3><p>A proud Duke shows a visitor his dead wife’s portrait. He admits she smiled at everything and everyone and did not value his name more than others’ gifts. He would not “stoop” to speak to her, so he “gave commands” and her smiles ended. Then he calmly talks marriage and dowry with the Count’s envoy and points out a bronze Neptune. The poem reveals his cruelty in his own words.</p></div></section>';
$("#content").innerHTML=h;
var links=[["cover","Cover"],["summary","Summary"],["theme","Main Theme"],["people","Characters"],["vocab","Vocabulary"],["lines","Important Lines"],["questions","Questions"],["revision","Quick Revision"]];
$("#drawer").innerHTML=links.map(function(l){return '<a href="#'+l[0]+'" data-t="'+l[0]+'">'+l[1]+'</a>'}).join("");
function go(id){var e=document.getElementById(id);if(e){screen.scrollTo({top:id==="cover"?0:e.offsetTop-48})}}
function closeMenu(){$("#drawer").classList.remove("open");$("#menuBtn").setAttribute("aria-expanded","false")}
$("#menuBtn").onclick=function(){var o=$("#drawer").classList.toggle("open");this.setAttribute("aria-expanded",o)};
$("#drawer").onclick=function(e){var a=e.target.closest("a");if(!a)return;e.preventDefault();closeMenu();go(a.dataset.t)};
$("#themeBtn").onclick=function(){phone.dataset.theme=phone.dataset.theme==="dark"?"light":"dark"};
$("#startBtn").onclick=function(){$("#cover").classList.add("open");setTimeout(function(){go("summary")},900)};
$("#topBtn").onclick=function(){go("cover")};
screen.addEventListener("click",function(e){
 var b=e.target.closest(".card>button");if(b){var c=b.parentNode,o=c.classList.toggle("open");b.setAttribute("aria-expanded",o);return}
 var f=e.target.closest(".flip");if(f){f.classList.toggle("on");return}
 var t=e.target.closest(".tabs button");if(t){var tb=t.parentNode.querySelectorAll("button"),g=t.parentNode.parentNode.querySelectorAll(".qgroup");tb.forEach(function(x,i){x.classList.toggle("on",x===t);g[i].classList.toggle("on",x===t)})}
});
screen.addEventListener("scroll",function(){
 var m=screen.scrollHeight-screen.clientHeight;$("#bar").style.width=(m>0?screen.scrollTop/m*100:0)+"%";
 $("#topBtn").hidden=screen.scrollTop<300;
});
})();