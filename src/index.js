const { registerBlockType } = wp.blocks;
const {
    RichText,
    URLInput,
    InspectorControls,
    ColorPalette,
} = wp.editor;
const { PanelBody, IconButton, RangeControl, FontSizePicker } = wp.components;

registerBlockType('gutenberg-call-to-action/call-to-action-block', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'universal-access-alt',
    category: 'layout',

    // custom attributes
    attributes: {
        "url": {
            "type": "string",
            "source": "attribute",
            "selector": "a",
            "attribute": "href"
        },
        "title": {
            "type": "string",
            "source": "attribute",
            "selector": "a",
            "attribute": "title"
        },
        "text": {
            "type": "string",
            "source": "html",
            "selector": "a"
        },
        "BackgroundColor": {
            "type": "string",
            "default": "Gray"
        },
        "FontColor": {
            "type": "string",
            "default": "black"
        },
        "borderRadius": {
            "type": "number"
        },
        "Padding": {
            "type": "number"
        },
        "fontSize": {
            "type": "number"
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            text,
            title,
            url,
            BackgroundColor,
            FontColor,
            borderRadius,
            Padding,
            fontSize
        } = attributes;

        return ([
            <InspectorControls>
                <FontSizePicker
                    value={ fontSize }
                    onChange={ ( value ) => setAttributes( { fontSize: value } ) } />
                <PanelBody title={ 'Background Color Settings' }>
                    <p><strong>Select a Background color:</strong></p>
                    <ColorPalette 
                        value={ BackgroundColor }
                        onChange={ ( value ) => setAttributes( { BackgroundColor: value } ) } />
                </PanelBody>
                <PanelBody title={ 'Font Color Settings' }>
                    <p><strong>Select a Font color:</strong></p>
                    <ColorPalette
                        value={ FontColor }
                        onChange={ ( value ) => setAttributes( { FontColor: value } ) } />
                </PanelBody>
                <PanelBody title={ 'Border Settings' }>
                    <RangeControl
                        value={ borderRadius }
                        label={ 'Border Radius' }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={ 5 }
                        allowReset
                        onChange={ ( value ) => setAttributes( { borderRadius: value } ) } />
                </PanelBody>
                <PanelBody title={ 'Select Padding' }>
                    <RangeControl
                        value={ Padding }
                        label={ 'Select Padding' }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={ 5 }
                        allowReset
                        onChange={ ( value ) => setAttributes( { Padding: value } ) } />
                </PanelBody>
            </InspectorControls>,
            <div class="cta-container">
            <RichText
                placeholder={ 'Add text…' }
                value={ text }
                onChange={ ( value ) => setAttributes( { text: value } ) }
                style={ { 
                    color: FontColor,
                    borderRadius: borderRadius + 'px',
                    backgroundColor: BackgroundColor,
                    padding: Padding + 'px',
                    fontSize: fontSize + 'px',
                    textDecoration: 'none'
                 } }
            />
            <URLInput
                label={ 'Link' }
                className="wp-block-button__inline-link"
                value={ url }
                autoFocus={ false }
                onChange={ ( value ) => setAttributes( { url: value } ) }
            />
            </div>
        ]);
    },

    save({ attributes }) {
        const {
            title,
            url,
            text,
            FontColor,
            borderRadius,
            BackgroundColor,
            Padding,
            fontSize
        } = attributes;

        return (
            <div class="cta-container">
                <RichText.Content
                tagName="a"
                href={ url }
                title={ title }
                value={ text }
                style={ { 
                    color: FontColor,
                    borderRadius: borderRadius + 'px',
                    backgroundColor: BackgroundColor,
                    padding: Padding + 'px',
                    fontSize: fontSize + 'px',
                    textDecoration: 'none'
                 } }
            />
            </div>
        );
    }
});