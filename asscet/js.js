const self = $('#self-id')
const education = $('#Education-id')
const target = $('#target-id')
const interest = $('#interest-id')

const btnSelf = $('.menu-self')
const btnEducation = $('.menu-education')
const btnTarget = $('.menu-target')
const btnInterest = $('.menu-interest')

education.hide()
target.hide()
interest.hide()

btnSelf.on('click', function() {
    education.hide()
    target.hide()
    interest.hide()
    self.show()
    btnSelf.addClass('active')
    btnEducation.removeClass('active')
    btnTarget.removeClass('active')
    btnInterest.removeClass('active')
})
btnEducation.on('click', function() {
    education.show()
    target.hide()
    interest.hide()
    self.hide()
    btnSelf.removeClass('active')
    btnEducation.addClass('active')
    btnTarget.removeClass('active')
    btnInterest.removeClass('active')
})
btnTarget.on('click', function() {
    education.hide()
    target.show()
    interest.hide()
    self.hide()
    btnSelf.removeClass('active')
    btnEducation.removeClass('active')
    btnTarget.addClass('active')
    btnInterest.removeClass('active')
})
btnInterest.on('click', function() {
    education.hide()
    target.hide()
    interest.show()
    self.hide()
    btnSelf.removeClass('active')
    btnEducation.removeClass('active')
    btnTarget.removeClass('active')
    btnInterest.addClass('active')
})

