require 'unimidi'
require 'pry'

num_messages = 100_000

# Prompt the user
input = UniMIDI::Input.gets

# using their selection...

puts 'send some MIDI to your input now...'

num_messages.times do
  m = input.gets
  puts m
  puts(m) if !(m[:data].first == '248')
rescue => e
  binding.pry
end

puts 'finished'
