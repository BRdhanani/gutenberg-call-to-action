<?php
/**
* Plugin Name: Call to Action
* Plugin URI: https://github.com/BRdhanani/gutenberg-call-to-action
* Description: Custom Call to Action Block
* Author: Brijesh Dhanani
* Version: 1.0.0
*/

function font_size()
{
    add_theme_support(
        'editor-font-sizes',
        array(
            array(
                'name' => 'Normal',
                'slug' => 'normal',
                'size' => 16
            ),
            array(
                'name' => 'Large',
                'slug' => 'large',
                'size' => 24
            )
        )
    );
}
add_action( 'init', 'font_size' );

function gutenberg_call_to_action(){
	wp_register_script( 
		'index-js',
		plugins_url( '/build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-editor', 'wp-components' )
	);
    register_block_type( 'gutenberg-call-to-action/call-to-action-block', array(
        'editor_script' => 'index-js'
    ) );
}
add_action('init','gutenberg_call_to_action');