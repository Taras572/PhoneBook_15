import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lesson15',
    templateUrl: './lesson15.component.html',
    styleUrls: ['./lesson15.component.css']
})
export class Lesson15Component implements OnInit {
    Index_input!: number;
    isShow = true;
    Input_name!: string;
    Input_second_name!: string;
    Input_number!: number | null;

    searchField = '';


    Mas_Inform: Array<any> = [
        {
            name: 'Petro',
            second_name: 'Gula',
            number: 380637432765
        },
        {
            name: 'Iruna',
            second_name: 'Zhuk',
            number: 380637456788
        },
        {
            name: 'Katya',
            second_name: 'Gural',
            number: 380639874652
        },
        {
            name: 'Oleg',
            second_name: 'Zuganov',
            number: 380637434321
        },
        {
            name: 'Igor',
            second_name: 'Sherementa',
            number: 380637432711
        },
        {
            name: 'Pavlo',
            second_name: 'Popov',
            number: 380637432222
        }
    ];

    constructor() { }

    ngOnInit(): void {

    }


    Edit_btn(index: number): void {
        this.isShow = !this.isShow;
        this.Index_input = index;
        this.Input_name = this.Mas_Inform[index].name;
        this.Input_second_name = this.Mas_Inform[index].second_name;
        this.Input_number = this.Mas_Inform[index].number;
    }

    Delete_btn(index: number): void {
        this.Mas_Inform.splice(index, 1);
    }

    Save_btn(): void {
        if (this.Input_name != '' && this.Input_number != null && this.Input_second_name != '') {
            this.Mas_Inform.push({ name: this.Input_name, second_name: this.Input_second_name, number: this.Input_number });
        }
        this.Input_name = '';
        this.Input_second_name = '';
        this.Input_number = null;
    }

    Confirm_btn(): void {
        this.isShow = !this.isShow;
        this.Mas_Inform[this.Index_input].name = this.Input_name;
        this.Mas_Inform[this.Index_input].second_name = this.Input_second_name;
        this.Mas_Inform[this.Index_input].number = this.Input_number;
        this.Clear()
    }

    Clear(): void {
        this.Input_name = '';
        this.Input_second_name = '';
        this.Input_number = null;
    }

}
