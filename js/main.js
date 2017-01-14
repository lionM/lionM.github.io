var app = new Vue({
	el: '#wrap',
	data: {
		en: false,
		langBtn: 'English'
	},
	methods: {
		langClick: function(event){
			this.en = !this.en;
			this.langBtn = this.en?'中文':'English';
		}
	}
});

