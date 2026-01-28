"use strict";

export class Buttons {
    buttons = [
        [
            {
                caption: "Catch4U Planning",
                src: "https://docs.google.com/spreadsheets/d/1SccosYPnZgTmcT8Ve2osweYHZFtpN_7C0VeiTrDXyYs/edit?gid=2103846288#gid=2103846288",
                class: "btn btn-outline-light",
                external: false
            },
            {
                caption: "Template opvolging in KD",
                src: "https://docs.google.com/document/d/1SJeM7VPCuy31J4wxvEtcPHyZAAeWLZa3ZkhOE7YUchc/edit?tab=t.0",
                class: "btn btn-outline-light",
                external: false
            },
            {
                caption: "Afspraken",
                src: "https://docs.google.com/document/d/1dl263W7msIa71WCZI7mFbGY4qUwRj2WpC2TDqh1c224/edit?tab=t.0",
                class: "btn btn-outline-light",
                external: false
            },
            {
                caption: "Flow",
                src: "https://docs.google.com/document/d/124FM1YpdE7deY42k1JFREsekzON1d5orShU_XE3QM5g/edit?tab=t.w10048yuo26m#heading=h.qmmuexe5hu81",
                class: "btn btn-outline-light",
                external: false
            }
        ],
        [
            {
                caption: "Lesmateriaal",
                src: "https://sites.google.com/vdabcampus.be/solliciteren-ict-heverlee/homepage",
                class: "btn btn-outline-light",
                external: true
            }
        ],
        [
            {
                caption: "Werkgevers ICT",
                src: "https://docs.google.com/spreadsheets/d/1jag0YM0s0Ll54Oq8ES7CefFQ0WGSxfdG9HKJXlMcaNs/edit?gid=1413032250#gid=1413032250",
                class: "btn btn-outline-light",
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