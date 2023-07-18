function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsButton = document.getElementById("memberSkillsButton");
    var memberSkillsClose = document.getElementById("memberSkillsClose");

    memberSkillsButton.onclick = function() {
        memberSkills.style.display = "block";
    }

    memberSkillsClose.onclick = function() {
        memberSkills.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == memberSkills) {
            memberSkills.style.display = "none";
        }
    }
}