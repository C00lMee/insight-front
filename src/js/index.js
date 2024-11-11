const el = {
toggleBtn: '.toggleBtn',
sidebar: '#sidebar',
headerToggleBtn: '.header .toggleBtn',
submitFull: '#submitFull',
submitHalf: '#submitHalf',
chatboxLg: '#chatboxLg',
contentWrapper: '#contentWrapper',
shareButtn: '.shareButtn',
chatbox: '#chatbox',
newBtn: '#newBtn',
inputFull: '#input-full',
inputHalf: '#input-half',
inputFile: '.input-file',
chatboxGroup: '.chatbox-group'
}

const mockData = {
'answer1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

$(document).ready(function() {
$(document).on('click', el.toggleBtn, function() {
$(el.sidebar).toggle('hidden')
const $headerToggleBtn = $(el.headerToggleBtn)
if ($headerToggleBtn.hasClass('hidden')) {
setTimeout(() => {
$headerToggleBtn.removeClass('hidden')
}, 300)
} else {
$headerToggleBtn.addClass('hidden')
}
}).on('click', el.submitFull, function(e) {
fn.handleInput(el.inputFull)
$(el.contentWrapper).removeClass('hidden')
$(el.shareButtn).removeClass('hidden')
$(el.chatboxLg).addClass('hidden')
$(el.chatbox).removeClass('hidden')
}).on('click', el.newBtn, function() {
const $content = $(el.contentWrapper)
if ($content.hasClass('hidden')) return
$content.addClass('hidden')
fn.clearContent()
$(el.shareButtn).addClass('hidden')
$(el.chatboxLg).removeClass('hidden')
$(el.chatbox).addClass('hidden')
}).on('click', el.submitHalf, function() {
fn.handleInput(el.inputHalf)
}).on('change', el.inputFile, function(e) {
const res = e.target.files[0]
const dropdown = $(el.chatboxGroup).find('.dropdown-menu.show')
dropdown.removeClass('show')
console.log(res)
})
})

const fn = {
handleInput: (e) => {
const $input = $(e)
const val = $input.val()
if (!val) return
$input.val('')
$(el.contentWrapper).append(
`<article>
<div class="user-side">
<div class="chat-border">${val}</div>
</div>
</article>
<article>
<div class="platform flex">
<div>
<i class="bi bi-robot"></i>
</div>
<div class="platform-container flex flex-column">
<div>${mockData.answer1}</div>
</div>
</div>
</article>`
)
console.log(val)
},

clearContent: () => {
$(el.contentWrapper).empty()
}
}