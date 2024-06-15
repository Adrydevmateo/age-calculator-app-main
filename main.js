'use strict'

const form = document.getElementById('form')
const btn_calculate = document.getElementById('btn-calculate')

const current_date = new Date()

let day = undefined
let month = undefined
let year = undefined

form.addEventListener('input', (e) => {
 e.preventDefault()
 const input = e.target

 if (input.id === 'form-day') {
  ValidateInput(input.value < 0 || input.value > 31, input)

  day = input.value
  CalculateDays()

  const show_days = document.getElementById('show-days')
  if (day < 0) show_days.innerHTML = '--'
  else show_days.innerHTML = day
 }

 if (input.id === 'form-month') {
  ValidateInput(input.value < 0 || input.value > 12, input)

  month = input.value
  CalculateMonths()

  const show_months = document.getElementById('show-months')
  if (month < 0)
   if (month === -1) show_months.innerHTML = '0'
   else show_months.innerHTML = '--'
  else show_months.innerHTML = month
 }

 if (input.id === 'form-year') {
  input.max = current_date.getFullYear()
  ValidateInput(input.value < 0 || input.value > current_date.getFullYear(), input)

  year = input.value
  CalculateYears()

  const show_years = document.getElementById('show-years')
  if (year < 0) show_years.innerHTML = '--'
  else show_years.innerHTML = year
 }
})

// Years = Current Year - Birth Year
const CalculateYears = () => {
 year = current_date.getFullYear() - year
}

// Months = Current Month - Birth Month
const CalculateMonths = () => {
 month = current_date.getMonth() - month
}

// Days = Current Day - Birth Day
const CalculateDays = () => {
 day = current_date.getDate() - day
}

const ValidateInput = (validation, element) => {
 if (validation) return element.classList.add('invalid-field')
 if (element.classList.contains('invalid-field')) element.classList.remove('invalid-field')
}