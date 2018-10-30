window.JG = {}

JG = (function (jg) {
  const problemNum = document.location.search.substr(1)

  if (problemNum) {
    addSrc(`${problemNum}.js`)
  } else {
    const title = document.createTextNode('Append ?1 to URL for my solution to https://projecteuler.net/problem=1 etc')
    document.body.appendChild(title)
  }

  function solution (num, func, file) {
    if (file) addSrc(file, run)
    else run()

    function run () {
      // separate the comment explaining the problem from the solution
      const tmp = el('p')
      tmp.innerText = func
      const [ code1, problemText, code2 ] = tmp.innerText.split(/ *\/\* *START| *END *\*\/\n/m) // use /*START blah blah END*/ to hold the problem text
      const codeText = [code1, code2].join('')

      const title = el('h1')
      title.innerHTML = `Project Euler - <a href="https://projecteuler.net/problem=${num}">Problem #${num}</a>`
      document.body.appendChild(title)

      const problem = el('div')
      const text = problemText.split('\n').map(line => line.trim()).join('<br>').trim()
      problem.innerHTML = `<p>${text}</p>`
      document.body.appendChild(problem)

      if (file) {
        const withFile = el('p')
        withFile.innerHTML = `<i>Using file <a href="${file}">${file}</a></i>`
        document.body.appendChild(withFile)
      }

      const result = el('p')
      const start = Date.now()
      let evaled = func()
      if (Array.isArray(evaled)) evaled = evaled.join(', ')
      const timeTaken = Date.now() - start
      result.innerHTML = `Result: <b>${evaled}</b> (took ${timeTaken}ms)`
      document.body.appendChild(result)

      const p = el('pre')
      p.innerText = codeText
      document.body.appendChild(p)
    }
  }

  // can't use xhr if working on file://
  function addSrc (path, cb) {
    const script = el('script')
    if (cb) script.onload = cb
    script.src = path
    document.body.appendChild(script)
  }

  function el (el) {
    return document.createElement(el)
  }

  jg.solution = solution

  return jg
})(JG)
