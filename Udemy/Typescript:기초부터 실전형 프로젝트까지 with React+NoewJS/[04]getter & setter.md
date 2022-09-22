# getter & setter

getter 메서드는 return 을 해야 한다.

```jsx
class AccountingDepartment extends Department {

	private lastReport: string;

	get mostRecentReport() {
		if(this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if(!value) {
			throw new Error('Please pass in a valid value!');
		}
		this.addReport(value);
	}

	...
}
```

### getter & setter 사용법

```jsx
const accounting = new AccountingDepartment();

accounting.mostRecentReport; // getter 사용법
accounting.mostRecentReport = "value ~~ "; // setter 사용법
```
