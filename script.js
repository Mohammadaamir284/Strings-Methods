$(document).ready(function () {
    $('.btn-1').click(function () {

        $('.original-text-span').html('')
        $('.change-text-span').html('')
        $('.description-text').html('')

        let input = $('input').val().trim()
        if (input === '') {
            alert('Please input should not be empty or contain spaces')
            return
        }
        $('.original-text-span').text(input)

        $('input').val('')

        let methods = [
            { name: "length", result: input.length , des: 'Returns the length of a string' },
            { name: "toUpperCase()", result: input.toUpperCase(), des: 'Returns a string converted to uppercase letters' },
            { name: "toLowerCase()", result: input.toLowerCase(), des: 'Returns a string converted to lowercase letters' },
            { name: "charAt(0)", result: input.charAt(0), des: 'Returns the character at a specified index (position)' },
            { name: "substring(0,3)", result: input.substring(0, 3), des: 'Extracts characters from a string, between two specified indices (positions)' },
            { name: "split('')", result: input.split(""), des: 'Splits a string into an array of substrings' }
        ];
        methods.map((item) => {
            let li = $(` <li class="li">${item.name}</li>`)

            li.click(function () {
                $(".name").html(`${item.name}`);
                $('.change-text-span').html(`${item.result}`)
                $('.description-text').html(`${item.des}`)
            });
            $('.ul').append(li)
        });
    })

})