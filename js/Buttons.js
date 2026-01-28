"use strict";

export class Buttons {
    buttons = [
        [
            {
                caption: "Catch4U",
                src: "https://docs.google.com/spreadsheets/d/1SccosYPnZgTmcT8Ve2osweYHZFtpN_7C0VeiTrDXyYs/edit?gid=2103846288#gid=2103846288",
                class: "btn btn-outline-dark",
                external: false
            }
        ],
        [
            {
                caption: "Lesmateriaal",
                src: "https://sites.google.com/vdabcampus.be/solliciteren-ict-heverlee/homepage",
                class: "btn btn-outline-dark external",
                external: true
            }
        ],
        [
            {
                caption: "Template opvolging sollicitatieondersteuning in klantendossier",
                src: "https://docs.google.com/document/d/1SJeM7VPCuy31J4wxvEtcPHyZAAeWLZa3ZkhOE7YUchc/edit?tab=t.0",
                class: "btn btn-outline-dark external",
                external: false
            }
        ]
    ];

    createButtons(area, frameArea) {
        let buttonArea = document.createElement("div");
        buttonArea.classList.add("buttonCategory");
        for (const category of this.buttons) {
            const div = document.createElement("div");
            for (const button of category) {

                if (button.external) {
                    const newButton = document.createElement("a");
                    newButton.innerHTML = button.caption;
                    newButton.className = button.class;
                    newButton.href = button.src;
                    newButton.target = "_blank";
                    div.appendChild(newButton);
                } else {
                    const newButton = document.createElement("button");
                    newButton.innerHTML = button.caption;
                    newButton.className = button.class;
                    newButton.addEventListener("click", () => {
                        frameArea.src = button.src;
                    });
                    div.appendChild(newButton);
                }
            }
            buttonArea.appendChild(div);
        }

        area.appendChild(buttonArea);
    }
}