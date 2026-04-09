import { useState } from 'react'
import './Calculator.css'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [firstNum, setFirstNum] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)
  const [expression, setExpression] = useState('')

  const handleNumber = (num) => {
    if (display === 'Error') return
    if (waitingForSecond) {
      setDisplay(String(num))
      setWaitingForSecond(false)
    } else {
      if (display.replace('-', '').length >= 12) return
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleDecimal = () => {
    if (waitingForSecond) {
      setDisplay('0.')
      setWaitingForSecond(false)
      return
    }
    if (!display.includes('.')) setDisplay(display + '.')
  }

  const doCalc = (a, b, op) => {
    switch (op) {
      case '+': return a + b
      case '−': return a - b
      case '×': return a * b
      case '÷': return b === 0 ? 'Error' : a / b
      default:  return b
    }
  }

  const formatNum = (n) => {
    if (n === 'Error') return 'Error'
    return parseFloat(n.toFixed(10)).toString()
  }

  const resetToError = () => {
    setDisplay('Error')
    setFirstNum(null)
    setOperator(null)
    setWaitingForSecond(false)
    setExpression('')
  }

  const handleOperator = (op) => {
    if (display === 'Error') return
    const current = parseFloat(display)
    if (firstNum !== null && !waitingForSecond) {
      const result = doCalc(firstNum, current, operator)
      if (result === 'Error') { resetToError(); return }
      const formatted = formatNum(result)
      setDisplay(formatted)
      setFirstNum(result)
      setExpression(formatted + ' ' + op)
    } else {
      setFirstNum(current)
      setExpression(display + ' ' + op)
    }
    setOperator(op)
    setWaitingForSecond(true)
  }

  const handleEquals = () => {
    if (operator === null || firstNum === null || display === 'Error') return
    const current = parseFloat(display)
    const result = doCalc(firstNum, current, operator)
    if (result === 'Error') { resetToError(); return }
    setExpression(expression + ' ' + display + ' =')
    setDisplay(formatNum(result))
    setFirstNum(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstNum(null)
    setOperator(null)
    setWaitingForSecond(false)
    setExpression('')
  }

  const handleBackspace = () => {
    if (display === 'Error') { setDisplay('0'); return }
    if (waitingForSecond) return
    if (display.length <= 1 || (display.length === 2 && display.startsWith('-'))) {
      setDisplay('0')
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  const handleToggleSign = () => {
    if (display === '0' || display === 'Error') return
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }

  const base = 'rounded-2xl text-xl font-bold cursor-pointer select-none flex items-center justify-center h-16 w-full'
  const isActiveOp = (op) => operator === op && waitingForSecond

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-neutral-950">
      <div className="calc-body rounded-3xl p-5 w-80">

        {/* Screen */}
        <div className="screen rounded-2xl px-4 py-3 mb-4">
          <p className="display-font text-right text-xs text-gray-500 h-4 truncate">
            {expression || '\u00A0'}
          </p>
          <p className={`display-font text-right mt-1 leading-none truncate
            ${display.length > 9 ? 'text-2xl' : display.length > 6 ? 'text-3xl' : 'text-4xl'}
            ${display === 'Error' ? 'text-red-400' : 'text-green-400'}`}
          >
            {display}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear}               className={`${base} btn-clear col-span-2 text-base`}>AC</button>
          <button onClick={handleBackspace}            className={`${base} btn-num text-base`}>⌫</button>
          <button onClick={() => handleOperator('÷')} className={`${base} btn-op text-2xl ${isActiveOp('÷') ? 'active-op' : ''}`}>÷</button>

          {['7','8','9'].map(n => (
            <button key={n} onClick={() => handleNumber(n)} className={`${base} btn-num`}>{n}</button>
          ))}
          <button onClick={() => handleOperator('×')} className={`${base} btn-op text-2xl ${isActiveOp('×') ? 'active-op' : ''}`}>×</button>

          {['4','5','6'].map(n => (
            <button key={n} onClick={() => handleNumber(n)} className={`${base} btn-num`}>{n}</button>
          ))}
          <button onClick={() => handleOperator('−')} className={`${base} btn-op text-2xl ${isActiveOp('−') ? 'active-op' : ''}`}>−</button>

          {['1','2','3'].map(n => (
            <button key={n} onClick={() => handleNumber(n)} className={`${base} btn-num`}>{n}</button>
          ))}
          <button onClick={() => handleOperator('+')} className={`${base} btn-op text-2xl ${isActiveOp('+') ? 'active-op' : ''}`}>+</button>

          <button onClick={handleToggleSign}        className={`${base} btn-num text-sm`}>+/−</button>
          <button onClick={() => handleNumber('0')} className={`${base} btn-num`}>0</button>
          <button onClick={handleDecimal}           className={`${base} btn-num`}>.</button>
          <button onClick={handleEquals}            className={`${base} btn-eq text-2xl`}>=</button>
        </div>

      </div>
    </div>
  )
}