class HTTPServer extends Laya.EventDispatcher{
		private hr: Laya.HttpRequest;
		public connect(addr:string, msg:string): void {
			this.hr = new Laya.HttpRequest();
			this.hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);//进行中
			this.hr.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);//完成
			this.hr.once(Laya.Event.ERROR, this, this.onHttpRequestError);//报错
			this.hr.send(addr, msg, 'post', 'text');
			
		}
		
		private onHttpRequestProgress(e: any): void {
			//console.log(e)
		}

		private onHttpRequestComplete(e: any): void {
			this.event("HTTPCOMPLETE", e)
		}
        private onHttpRequestError(e: any): void {
            this.event("HTTPERROR")
			console.log(e);
		}
}