window.JG = {}

JG = (function (jg) {
  const problemNum = document.location.search.substr(1)

  if (problemNum) {
    const script = document.createElement('script')
    script.setAttribute('src', `${problemNum}.js`)
    document.body.appendChild(script)
  } else {
    const title = document.createTextNode('Append ?1 to URL for my solution to https://projecteuler.net/problem=1 etc')
    document.body.appendChild(title)
  }

  function solution (num, func) {
    // separate the comment explaining the problem from the solution
    const tmp = document.createElement('p')
    tmp.innerText = func
    const [ code1, problemText, code2 ] = tmp.innerText.split(/ *\/\* *START| *END *\*\/\n/m) // use /*START blah blah END*/ to hold the problem text
    const codeText = [code1, code2].join('')

    const title = document.createElement('h1')
    title.innerHTML = `Project Euler - <a href="https://projecteuler.net/problem=${num}">Problem #${num}</a>`
    document.body.appendChild(title)

    const problem = document.createElement('div')
    const text = problemText.split('\n').map(line => line.trim()).join('<br>').trim()
    problem.innerHTML = `<p>${text}</p>`
    document.body.appendChild(problem)

    const result = document.createElement('p')
    const start = Date.now()
    let evaled = func()
    if (Array.isArray(evaled)) evaled = evaled.join(', ')
    const timeTaken = Date.now() - start
    result.innerHTML = `Result: <b>${evaled}</b> (took ${timeTaken}ms)`
    document.body.appendChild(result)

    const p = document.createElement('pre')
    p.innerText = codeText
    document.body.appendChild(p)
  }

  jg.solution = solution

  return jg
})(JG)
