

export class BaseDropwownControl {
    public disabled: boolean = false;
    public selectedItem: string;
    public items: string[];
    public status: {isopen: boolean} = {isopen: false};

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    public selectMenuItem(item: string): void {
        this.selectedItem = item;
        console.log('Selected: ', item);
    }
}