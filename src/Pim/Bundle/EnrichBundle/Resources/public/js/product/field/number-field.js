'use strict';
/**
 * Number field
 *
 * @author    Julien Sanchez <julien@akeneo.com>
 * @author    Filips Alpe <filips@akeneo.com>
 * @copyright 2015 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
define([
        'pim/field',
        'underscore',
        'text!pim/template/product/field/number'
    ], function (
        Field,
        _,
        fieldTemplate
    ) {
        return Field.extend({
            fieldTemplate: _.template(fieldTemplate),
            fieldType: 'number',
            events: {
                'change .field-input input[type="text"]': 'updateModel'
            },
            renderInput: function (context) {
                return this.fieldTemplate(context);
            },
            updateModel: function () {
                var data = this.$('.field-input input[type="text"]').get(0).value;

                if ('' !== data) {
                    var numericValue = -1 !== data.indexOf('.') ? parseFloat(data) : parseInt(data);

                    if (!isNaN(numericValue)) {
                        data = numericValue;
                    }
                } else {
                    data = this.attribute.empty_value;
                }

                this.setCurrentValue(data);
            }
        });
    }
);