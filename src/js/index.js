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
'answer1': '洞察云计算结果如下'
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
<div>洞察云计算结果如下</div>
<div>
<table class="table">
	<thead>
		<tr>
			<th>订单号</th>
			<th>商品ID</th>
			<th>商品数量</th>
			<th>折扣信息</th>
			<th>单价</th>
			<th>实际总金额</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>ORDER002</td>
			<td>11567504145101</td>
			<td>14</td>
			<td>满100减40，秒杀七折，限三份</td>
			<td>24.9</td>
			<td>52.29</td>
		</tr>
	</tbody>
</table>
</div>
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