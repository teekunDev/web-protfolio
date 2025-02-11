import {emojify} from "node-emoji";
import dateDiff from "date-diff"

const dateBirthday = new Date(2004,11,5)
const dateNow = new Date(Date.now())

const diff = new dateDiff(dateBirthday, dateNow)


export const AboutMe = {
    en: `Hi, my name is Robin, and I’m a ${Math.ceil(diff.years()).toString().replace("-","")}-year-old software developer based in Austria. I am a certified professional with a completed apprenticeship in software development and 4 years of hands-on experience in the field.` +
        "\n" +
        "My expertise lies in backend development, where I have strong skills in PHP and TypeScript.\n" +
        "\n" +
        "In addition, I am currently enhancing my skills in frontend development, focusing on TypeScript/JavaScript, HTML, and CSS, to grow into a versatile full-stack developer.\n" +
        "\n" +
        "Let’s create something amazing together!",
    de: `Hallo, mein Name ist Robin, ich bin ${Math.ceil(diff.years()).toString().replace("-","")} Jahre alt und komme aus Österreich. Ich bin ein ausgebildeter Facharbeiter mit einer abgeschlossenen Lehre im Bereich Softwareentwicklung und habe 4 Jahre praktische Berufserfahrung.\n` +
        "\n" +
        "Meine Expertise liegt in der Backend-Entwicklung, wobei ich über umfangreiche Kenntnisse in PHP und TypeScript verfüge.\n" +
        "\n" +
        "Derzeit erweitere ich meine Fähigkeiten in der Frontend-Entwicklung, mit einem Schwerpunkt auf TypeScript/JavaScript, HTML und CSS, um mich zu einem vielseitigen Full-Stack-Entwickler weiterzuentwickeln.\n" +
        "\n" +
        "Lass uns gemeinsam etwas Großartiges schaffen!",
}

export const Languages = [
    {
        language: emojify(":de: German"),
        languageCode: "de"
    },
    {
        language: emojify(":us: English"),
        languageCode: "en"
    }
]

