const fullName = "Peter Parker"

const template = `
<header>
    <h1>${fullName}</h1>
    <p>Loremipsum</p>
    <ul>
        <li>Primero</li>
        <li>Segundo</li>
    </ul>
</header>

`
document.body.innerHTML = template
