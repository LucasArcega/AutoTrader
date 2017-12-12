import { EventEmitter } from 'events';

export class AppEventDispatcher {

	static myEvent = new EventEmitter();

	static dispatch(myEventName: string, data: any) {
		AppEventDispatcher.myEvent.emit(myEventName, data);
	}

	static listen(myEventName: string, handler: any) {
		AppEventDispatcher.myEvent.addListener(myEventName, handler);
	}

	constructor() {

	}

}
